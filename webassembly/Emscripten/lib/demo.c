#include <stdio.h>
#include <string.h>
#include <emscripten.h>

EM_JS( void, myJSFunc1, (int x), {
    console.log('test JS from C using EM_JS! - ' + x + '.');
})

int main() {
    printf("Hello Emscripten!\n");

    emscripten_run_script("console.log('Hello from emscripten_run_script.');");

    int x = emscripten_run_script_int("getValueJS()");
    printf("My value from emscripten_run_script_int: %d.\n", x);

    char *s = emscripten_run_script_string("getValueJSString()");
    printf("My value from emscripten_run_script_string: %s.\n", s);

    myJSFunc1(333);
}

char stringSpace[50];
char *greet( char *name) {
    if (strlen(name) > 40) {
        return "Name too long!";
    } 
    strcpy(stringSpace, "Hello, ");
    return strcat(stringSpace, name);
}

