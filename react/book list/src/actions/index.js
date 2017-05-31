export function selectBook( book ){
	
	let res = {
		
		type : 'BOOK_SELECTED',
		book
		
	};
	
	return res;
	
}