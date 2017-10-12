import {expect} from '../test_helper';
import {commentsReducer} from "../../src/reducers/index";

describe('Reducers', () =>{
	
	let action = {
		type    : 'NEW_COMMENT',
		payload : 'test'
	};
	
	it('Comments', () =>{
		
		expect(commentsReducer()).to.be.instanceof(Array);
		expect(commentsReducer()).to.have.length(0);
		expect(commentsReducer([], action)).to.have.length(1);
		expect(commentsReducer([], action)[0]).to.equal('test');
		
	});
	
});