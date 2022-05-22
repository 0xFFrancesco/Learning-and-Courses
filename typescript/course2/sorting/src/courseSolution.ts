import { NumbersCollection } from "./NumbersCollection";
import { Sortable, Sorter } from "./Sorter";
import { CharactersCollection } from "./CharactersCollection";

export const runCourseSolution = () => {
	sortAndLog(new NumbersCollection([10, 3, -5, 0]));
	sortAndLog(new CharactersCollection("abCXsakwVDAlmssvA"));
};

const sortAndLog = (input: Sortable) => {
	const sorter = new Sorter(input);
	console.log(`------------
Input: ${input.getData()}`);
	sorter.sort();
	console.log(`Output: ${sorter.getResult()}
------------`);
};
