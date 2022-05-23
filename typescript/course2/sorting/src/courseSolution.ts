import { NumbersCollection } from "./NumbersCollection";
import { Sortable, Sorter } from "./Sorter";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

export const runCourseSolution = () => {
	sortAndLog(new NumbersCollection([10, 3, -5, 0]));
	sortAndLog(new CharactersCollection("abCXsakwVDAlmXxXxssvaAa"));
	const linkedList = new LinkedList();
	linkedList.add(3);
	linkedList.add(-1);
	linkedList.add(-3);
	sortAndLog(linkedList);
};

const sortAndLog = (input: Sortable) => {
	const sorter = new Sorter(input);
	console.log(`------------
Input: ${input.getData()}`);
	sorter.sort();
	console.log(`Output: ${sorter.getResult()}
------------`);
};
