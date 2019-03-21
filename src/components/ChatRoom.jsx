import React from 'react';
import Constants from '../configs/constants';
import Avatar from './Avatar';

const ChatRoom = ({ isCollapsed }) => (
    <div className="chat-room">
        <Avatar type={Constants.Avatar.Rounded} size={40} alt="test" src='http://i.pravatar.cc/35' />
        {!isCollapsed &&
            <div className="chat-room__content">
                <div className="chat-room__content--header">
                    <div className="title">Jorge Carlos </div>
                    <div className="time">1 min</div>
                </div>
                <div className="chat-room__content--msg"> Olá Henrique como estás eestá tudo bem??? </div>
            </div>
        }

    </div>
)

export default ChatRoom;