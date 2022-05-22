const bubbleSort = (array: any[]) => {
	let cycles = 0;

	if (array.length < 2) {
		return cycles;
	}

	for (let i = array.length; i > 0; i--) {
		let hasChanged = false;
		cycles++;

		for (let j = 1; j < i; j++) {
			if (array[j - 1] > array[j]) {
				const temp = array[j];
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

const sortAndLog = (input: any[]) => {
	console.log(`------------
Input: ${input}`);
	const cycles = bubbleSort(input);
	console.log(`Output: ${input}
Cycles: ${cycles}
------------`);
};

export const runMySolution = () => {
	console.log("CLI Bubble-Sorting Program.");
	console.log("Starting...");

	const input1 = [0, 5, -1, 10, 45, -3, 1, 1, 1];
	sortAndLog(input1);

	const input2 = [1, -1];
	sortAndLog(input2);

	const input3 = [1];
	sortAndLog([input3]);

	console.log("Finished...");
};
