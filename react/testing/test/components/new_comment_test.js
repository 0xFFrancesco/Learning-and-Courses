import {renderComponent, expect} from '../test_helper';
import NewComment from '../../src/components/new_comment';

describe('New comment component', () =>{
	
	let component;
	
	beforeEach(() =>{
		component = renderComponent(NewComment, {
			onNew : () =>{
				
			}
		});
	});
	
	it('has a text area', () =>{
		expect(component.find('textarea')).to.exist;
	});
	
	it('has a button', () =>{
		expect(component.find('button')).to.exist;
	});
	
	it('has the class comment-box', () =>{
		expect(component).to.have.class('comment-box');
	});
	
	describe('Text handling', () =>{
		
		beforeEach(() =>{
			component.find('textarea').simulate('change', 'new comment');
		});
		
		it('shows text has been entered', () =>{
			
			expect(component.find('textarea')).to.have.value('new comment');
			
		});
		
		it('clears the input when submitted', () =>{
			
			component.find('button').simulate('click');
			expect(component.find('textarea')).to.have.value('');
			
		});
		
	});
	
});