import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { Sortable } from "./Sortable";

export const runCourseSolution = () => {
	sortAndLog(new NumbersCollection([10, 3, -5, 0]));

	sortAndLog(new CharactersCollection("abCXsakwVDAlmXxXxssvaAa"));

	const linkedList = new LinkedList();
	linkedList.add(3);
	linkedList.add(-1);
	linkedList.add(-3);
	linkedList.add(0);
	sortAndLog(linkedList);
};

const sortAndLog = (sortableData: Sortable) => {
	console.log(`------------
Input: ${sortableData.getResult()}`);
	sortableData.sort();
	console.log(`Output: ${sortableData.getResult()}
------------`);
};
