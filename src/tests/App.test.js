import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';
import Header from '../Header';
import ColorRange from '../ColorRange';


describe('tests for App', () => {
	it('renders App without crashing (deep)', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<App />, div);
	});

	it('renders App without crashing (shallow)', () => {
	  shallow(<App />);
	});

	it('renders initial State hue', () => {
		var wrapper = shallow(<App />).find('#hueDisplay');
		expect(wrapper.contains(90)).toEqual(true);
	});
});


describe('tests for Header', () => {
	var wrapper;
	beforeEach(() => {
		// prevent duplication
		wrapper = shallow(<Header />);
	});
	it('renders Header without crashing (shallow)', () => {
		expect(wrapper).toExist;
	});

	it('renders Header text', () => {
		const headerText = "Color Slider";
		expect(wrapper.contains(headerText)).toEqual(true);
	});	
});

describe('tests for ColorRange', () => {
	var wrapper;
	beforeEach(() => {
		wrapper = shallow(<ColorRange />);
	});
	it('renders ColorRange without crashing (shallow)', () => {
		expect(wrapper).toExist;
	});
});


