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
