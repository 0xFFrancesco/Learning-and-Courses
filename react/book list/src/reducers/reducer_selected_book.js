module.exports = ( state, action ) =>{
	
	switch ( action.type ) {
		
		case 'BOOK_SELECTED':
			return action.book;
		
	}
	
	return {title : 'None'};
	
};