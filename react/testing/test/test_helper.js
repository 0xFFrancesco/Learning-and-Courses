import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, {expect} from 'chai';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';
import chaiJuery from 'chai-jquery';

//Set up testing environment to run like the browser in the CLI
global.document = jsdom.jsdom('<html><head></head><body></body></html>');
global.window   = global.document.defaultView;
const $         = _$(global.window);

//Build a `renderComponent` helper to render React classes
function renderComponent( ComponentClass, props, state ){
	
	const componentInstance = TestUtils.renderIntoDocument(<Provider store={createStore(reducers, state)}>
		<ComponentClass {...props} />
	</Provider>);
	return $(ReactDOM.findDOMNode(componentInstance)); //HTML of the component
	
}

//Build helper for simulating events
$.fn.simulate = function( eventName, value ){
	
	if ( value ) {
		this.val(value);
	}
	TestUtils.Simulate[ eventName ](this[ 0 ]);
	
};

//Set up chai-jquery
chaiJuery(chai, chai.util, $);

export {renderComponent, expect};