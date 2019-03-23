import React from 'react';
import Constants from '../configs/constants';
import kind_sad from '../assets/imgs/kind_sad.png';
import kind_happy from '../assets/imgs/kind_happy.png'


const Avatar = props => {
	switch (props.type) {
		default:
		case Constants.Avatar.rounded: return _renderRoundedAvatar(props);
		case Constants.Avatar.BotSad:
		case Constants.Avatar.BotHappy: return _renderBotAvatar(props);
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

const _renderBotAvatar = ({ size, alt, type }) => (
	<img
		style={{ minWidth: `${size}px`, minHeight: `${size}px` }}
		className="avatar avatar__bot"
		src={type == Constants.Avatar.BotSad ? kind_sad : kind_happy}
		height={size}
		width={size}
		alt={alt}
	/>
)

export default Avatar;