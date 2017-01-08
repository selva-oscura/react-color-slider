import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';



it('renders App without crashing (deep)', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders App without crashing (shallow)', () => {
  shallow(<App />);
});


