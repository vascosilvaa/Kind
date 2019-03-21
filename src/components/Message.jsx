import React from 'react';
import Constants from '../configs/constants';
import Avatar from './Avatar';

const Message = props => {
    switch (props.type) {
        default:
        case Constants.Message.sent: return _renderMessageSent();
        case Constants.Message.received: return _renderMessageReceived();
        case Constants.Message.bot: return _renderMessageBot();
    }
}

const _renderMessageSent = () => (
    <div className="message message__sent">
        <div className="message__baloon--sent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet maximus dapibus. Donec ultricies tempus tellus, egestas vulputate lectus finibus iaculis.
        </div>
    </div>
)




const _renderMessageReceived = () => (
    <div className="message message__received">
        <Avatar type={Constants.Avatar.Rounded} size={40} alt="test" src='http://i.pravatar.cc/35' />
        <div className="message__baloon--received">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet maximus dapibus. Donec ultricies tempus tellus, egestas vulputate lectus finibus iaculis.
        </div>
    </div>
)

const _renderMessageBot = () => (
    <div className="message message__bot">
        <strong>Kind: </strong> <span> Be careful with your words. </span>
   </div>
)




export default Message;