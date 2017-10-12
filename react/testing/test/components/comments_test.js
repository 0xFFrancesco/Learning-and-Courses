import {renderComponent, expect} from '../test_helper';
import Comments from '../../src/components/comments';

describe('Comment list', () =>{
	
	let component = renderComponent(Comments, {items : [ 'a comment' ]});
	
	it('shows a single comment', () =>{
		expect(component.find('li')).to.have.length(1);
		expect(component.find('li')).to.contain('a comment');
	});
	
	it('shows multiple comments', () =>{
		
		component = renderComponent(Comments, {items : [ 'a comment', 'a second comment', 'a third comment' ]});
		
		expect(component.find('li')).to.have.length(3);
		expect(component.find('li:nth-child(1)')).to.contain('a comment');
		expect(component.find('li:nth-child(2)')).to.contain('a second comment');
		expect(component.find('li:nth-child(3)')).to.contain('a third comment');
		expect(component.find('li:nth-child(4)')).not.to.exist;
		
	});
	
	
});