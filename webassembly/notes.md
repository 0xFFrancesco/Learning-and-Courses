# WebAssembly

- Uses a low level compiled language like: `c`, `C++`, `Go`, `Rust`;
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
- To load a compiled `.wasm` file you can use the browser API `WebAssembly.instantiateStreaming(source, importObject);`;
    - `source`: the path to the file;
    - `importObject`: a JavaScript object than you can import to the `.wasm` file to call its functions;
    - It returns a promise that gets resolved with the instance of the WebAssembly code where you can call the WebAssembly exported functions.
    