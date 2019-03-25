import React from 'react';

const PersonState = ({ state, size }) => (
	<span className={`fa fa-circle person__state--${state} person__state--${size}`} />
	
);

export default PersonState;