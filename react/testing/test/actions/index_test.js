import {expect} from '../test_helper';
import {newComment} from '../../src/actions';

describe('Actions', () =>{
	
	it('NewComment', () =>{
		
		expect(newComment('name').type).to.equal('NEW_COMMENT');
		expect(newComment('name').payload).to.equal('name');
		
	});
	
});