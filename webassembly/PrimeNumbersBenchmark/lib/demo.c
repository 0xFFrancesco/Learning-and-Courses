int main() {
    //printf("Hello Emscripten!\n");
}

int WASMIsPrimeNumber(int num) {
    float max = num / 2 + 1;
    for (int i = 2; i<max; i++) {
        if (num % i == 0){
            return 0;
        }
    }
    return (num != 1 && num != 0) ? 1 : 0;
}

int WASMCheckPrimes(int numberToCheck) {
    int count = 0;
    for (int i = 2; i<numberToCheck; i++) {
        if (WASMIsPrimeNumber(i)){
            count++;
        }
    }
    return count;
}
