import React from 'react';
import Constants from '../configs/constants';

const Button = props => {
	switch (props.type) {
		default:
		case Constants.Button.Collapse: return _renderMenuCollapseButton(props)
	}
}

const _renderMenuCollapseButton = props => (
	<button className='button button__collapse' {...props}>
		<span className="fa fa-angle-right" />
	</button>
)



export default Button;