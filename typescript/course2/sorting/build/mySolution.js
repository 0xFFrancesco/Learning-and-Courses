"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runMySolution = void 0;
var bubbleSort = function (array) {
    var cycles = 0;
    if (array.length < 2) {
        return cycles;
    }
    for (var i = array.length; i > 0; i--) {
        var hasChanged = false;
        cycles++;
        for (var j = 1; j < i; j++) {
            if (array[j - 1] > array[j]) {
                var temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
                hasChanged = true;
            }
        }
        if (!hasChanged) {
            break;
        }
    }
    return cycles;
};
var sortAndLog = function (input) {
    console.log("------------\nInput: ".concat(input));
    var cycles = bubbleSort(input);
    console.log("Output: ".concat(input, "\nCycles: ").concat(cycles, "\n------------"));
};
var runMySolution = function () {
    console.log("CLI Bubble-Sorting Program.");
    console.log("Starting...");
    var input1 = [0, 5, -1, 10, 45, -3, 1, 1, 1];
    sortAndLog(input1);
    var input2 = [1, -1];
    sortAndLog(input2);
    var input3 = [1];
    sortAndLog([input3]);
    console.log("Finished...");
};
exports.runMySolution = runMySolution;
