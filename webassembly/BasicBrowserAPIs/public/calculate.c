#include <string.h>

void sendString(int offset, int lenght);

void calculate() { 
    //BIG CALCULATION HERE
    char *msg = "WebAssembly calculation finished!";
    sendString(msg, strlen(msg));
};