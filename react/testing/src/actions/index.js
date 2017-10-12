export function newComment( text ){
	
	return {
		type    : 'NEW_COMMENT',
		payload : text
	};
	
}