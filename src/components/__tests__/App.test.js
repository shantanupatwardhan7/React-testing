import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, mount, render } from 'enzyme';
import CommentBox from '../CommentBox';

it('shows a comment box', () => {
	// const div = document.createElement('div');
	// ReactDOM.render(<App />, div);
	// expect(div.innerHTML).toContain('Comment box');
	// expect(div.innerHTML).toContain('Comment List');
	// ReactDOM.unmountComponentAtNode(div);
	const wrapped = shallow(<App />);
	expect(wrapped.find(CommentBox).length).toEqual(1);
});
