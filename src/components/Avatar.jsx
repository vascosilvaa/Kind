import React from 'react';
import Constants from '../configs/constants';

const Avatar = props => {
	switch (props.type) {
		default:
		case Constants.Avatar.rounded: return _renderRoundedAvatar(props);
	}
}

const _renderRoundedAvatar = ({ size, src, alt }) => (
	<img
		style={{ minWidth: `${size}px`, minHeight: `${size}px` }}
		className="avatar avatar__rounded"
		src={src || 'https://discovery-park.co.uk/wp-content/uploads/2017/06/avatar-default.png'}
		height={size}
		width={size}
		alt={alt}
	/>
)


export default Avatar;