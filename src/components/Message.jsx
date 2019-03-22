import React from 'react';
import Constants from '../configs/constants';
import Avatar from './Avatar';

const Message = props => {
    switch (props.type) {
        default:
        case Constants.Message.sent: return _renderMessageSent(props);
        case Constants.Message.received: return _renderMessageReceived(props);
        case Constants.Message.bot: return _renderMessageBot(props);
    }
}

const _renderMessageSent = ({ content }) => {
    return (
        <div className="message message__sent" >
            <div className="message__baloon--sent">
                {content}
            </div>
        </div>
    )
}




const _renderMessageReceived = ({ content, user }) => (
    <div className="message message__received">
        <Avatar type={Constants.Avatar.Rounded} size={40} alt="test" src={user.photo} />
        <div className="message__baloon--received">
            {content}
        </div>
    </div>
)

const _renderMessageBot = () => (
    <div className="message message__bot">
        <strong>Kind: </strong> <span> Be careful with your words. </span>
    </div>
)




export default Message;