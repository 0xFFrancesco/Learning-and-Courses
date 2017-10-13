export default function( {dispatch} ){
	
	return next => action =>{
		if(!action.payload || !action.payload.then){
			return next(action);
		}
		return action.payload.then(v => dispatch({...action, payload: v.data}));
	};
	
}