# WebAssembly

- Uses a low level compiled language like: `C`, `C++`, `Go`, `Rust`;
    - It gets compiled to a `.wasm` file that contains a compiled binary-like code that can be run by any host system/browser (like an intermediate represention);
    - The binary-like code will then run in a browser sandbox that keeps the code secure from accessing outside memory or treathing the host system;
    - It can be as fast as ~80% of a totally native program.
- The main bottleneck is the communication with the JavaScript runtime;
    - WebAssembly doesn't understand the rich JavaScript types like `objects`, `arrays` or even `string`;
    - It understands only arrays/streams of numbers;
    - For that it needs to use some "glue-code" that can converts data back and forth from JavaScript to WebAssembly and vice versa.
- You can import JavaScript functions into WebAssebly, and you can call them from inside the WebAssembly engine;
- As vice versa the WebAssembly file exports functions that can be called by the JavaScript runtime;
- All the WebAssembly APIs in the browser are found in the `WebAssembly` global object;
- To load a compiled `.wasm` file you can use the browser API `WebAssembly.instantiateStreaming(source, importObject)`;
    - `source`: the path to the file;
    - `importObject`: a JavaScript object than you can import to the `.wasm` file to call its functions;
    - It returns a promise that gets resolved with the instance of the WebAssembly code where you can call the WebAssembly exported functions.

### Passing data around and calling imported/exported functions
- You can easily pass integers around;
- When it comes to strings, it gets more complicated;
    - You need to pass back the pointer to the starting location of the string in memory (as an integer starting offset);
    - You receive by default an exported `WebAssembly.Memory` object, that is an `ArrayBuffer` of fixed length (Npages: 1page === 64Kb) and is shared between WebAssembly and JavaScript, so that you can calculate and put things into that memory from WebAssembly and then call JavaScript functions that can use that same memory for reading the calculated values in the JavaScript runtime;
    - You can use the string pointer offset to read the string data from the exporter memory object;
    - To know when the strings finishes in the memory you need to either use some special terminator character or provide the length back from WASM;
    - Instead of reading the default memory exported from WASM, you can create you own shared memory object from JavaScript and pass it to the WebAssembly instance using `new WebAssembly.Memory({initial: 2})`;
        - The `initial` property defines the number of memory pages to be created;
        - You can then tell WebAssembly to use that memory passing that object inside the `importedObject` under the `env.memory` property; 
        - There is no easy way though to access that memory from the WebAssembly code, meaning that we have to manually add an import statement editing directly the compiled `.wasm` file;
        - There are tools like `Emscripten` that simplify this process.

### Emscripten
    - Provides CLI commands to compile from another low level language to `wasm`;
    - Generates a JavaScript and a WebAssembly file;
    - They alreay contain the "glue code" needed to easily communicate between the JavaScript runtime and WebAssembly;
    - You just need to import the JavaScript file in the project;
    - You need to specify at compile time the functions that you want Emscripten to export and make callable from JavaScript;
    - Example: `emcc my_c_code.c -s WASM=1 -s EXPORTED_FUNCTIONS="['_myFuncName']" -o ./myAssetsFolder/my_compiled_code.js`;
    - You need to prepend an underscore `_` at every exported function name;
    - If you don't provide an `EXPORTED_FUNCTIONS` argument, it will automatically export and execute the `main()` function of the `.c` file;
    - The exported functions are available in the `window` object as global variables;
    - The `ccode()` function allows you to call a `c` function without the need to export it or prepend an underscore (ex. `ccode('myFuncName')`);
    - It also allows you to easily get strings arount, ex. `ccode('myFuncName', 'string')`;
    - The full `ccall` function is: `ccall('functionName', 'returnType', ['inputArg1Type', 'inputArgNType'], [inputArg1, inputArgN])`;
    - Instead of using `ccall` every time, you can just `cwrap` a function to always be callable with that set of input types, ex. `cwrap('functionName', 'returnType', ['inputArg1Type', 'inputArgNType'])` and then just `functionName(inputArg1, inputArgN)`;
    - Emscripten doesn't let you import JavaScript function inside `c`, instead it provides some helper functions via `#include <emscripten.h>`;
    - One of the being `emscripten_run_script` that behaves like `eval`, executing arbitrary JavaScript from inside `c`;
    - We can call and get the result of a JavaScript function return value in `c` code using for example `int res = emscripten_run_script_int("myJSFunction()")`;
    - That was valid for a JavaScript function returnin an integer, but we have of course a version for a string: `char *res = emscripten_run_script_string("myJSFunctionString()")`;
    - We have yet another way that is using `EM_JS` to create a function decoration callable in `c`, example: `EM_JS(void, myJSFuncInC, (int x), {console.log(x) //javascript code here!})`;
    - Interacting with strings is way easier as well! You can for example use `UTF8ToString(myReturnedStringWASMMemoryPointer)` to automatically convert and get a WASM return string pointer to the full string;
    - You can also easily update the string in the WASM memory using JavaScript with this other utility funtion: `stringToUTF8("my string value", myReturnedStringWASMMemoryPointer, lenghtBytesUTF8("my string value")+1)`;
    - The function `lenghtBytesUTF8("my string value")+1` means to convert the string in the number of bytes required to store it (a single character may need more than one byte), and the `+1` means to add an extra space for the string termination character;
    - You can log debugging messages from WASM with `emscripten_log( LOG_LEVEL, "my logged messaged")`;
    - When do we know when Emscripted has loaded and initialised its environment inside JavaScript so that we can start calling our WASM functions? It provides a callback on the exported `Module` object, so we can do: `Module['onRuntimeInitiaized'] = () => { _myWASMFn(); }`;
    - How to access the memory through Emscripten? With `Module.HEAPXXX` (`XXX` being an option between `HEAP8, HEAP16, HEAP32, HEAPF32, HEAPF64, HEAPU8, HEAPU16, HEAPU32`). Is that different data? Actually not, that is the same exact memory and data, those are just different views/representations of the same exact memory. Those options are grouping options, HEAP8 is an array where every entry is a slice of a byte of memory, meanwhile `HEAP32` is an array where every entry is a slice of 4bytes of the same memory. Again, same memory, different gropping/view/representation. If we are reading a string, `HEAP8` comes handy as data is already gropued by byte, while if we are reading integers `HEAP32` is better suited as the raw memory binary data is already grouped into entries of 4bytes each, so every entry is a 32bit integer that we can read without any additional operation or conversion. To keep in mind that memory pointers, offsets and data size/length is provided in bytes, so we have to divided those numbers by the number of bytes of the view/grouping that we want to access. For example if we are reading an array of integers using the `Module.HEAP32` array, we need to divide the memory starting pointer and data size by 4 (the number of bytes our view groups each entry) in order to get the actual real memory starting pointer and data size referred to this specific `HEAP32` array view.
