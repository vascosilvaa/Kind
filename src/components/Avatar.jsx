import React from 'react';
import Constants from '../configs/constants';
import kind_sad from '../assets/imgs/kind_sad.png'

const Avatar = props => {
	switch (props.type) {
		default:
		case Constants.Avatar.rounded: return _renderRoundedAvatar(props);
		case Constants.Avatar.Bot: return _renderBotAvatar(props);
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

const _renderBotAvatar = ({ size, alt }) => (
	<img
		style={{ minWidth: `${size}px`, minHeight: `${size}px` }}
		className="avatar avatar__bot"
		src={kind_sad}
		height={size}
		width={size}
		alt={alt}
	/>
)





export default Avatar;