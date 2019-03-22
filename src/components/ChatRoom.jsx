import React from 'react';
import Constants from '../configs/constants';
import Avatar from './Avatar';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

const ChatRoom = props => {
    const { isCollapsed, room, history } = props
    return (
        <div className="chat-room" onClick={() => history.push(`/chat/conversations/${room.id}`)}>
            <Avatar type={Constants.Avatar.Rounded} size={40} alt={room.users[0].name} src={room.users[0].photo} />
            {!isCollapsed &&
                <div className="chat-room__content">
                    <div className="chat-room__content--header">
                        <div className="title">{room.users[0].name} </div>
                        <div className="time">{room.messages[0] && moment(room.messages[0].createdAt).format('dddd')}</div>
                    </div>
                    {room.messages[0]
                        ? <div className="chat-room__content--msg"> {room.messages[0].content} </div>
                        : <div className="chat-room__content--msg">Start talking!</div>
                    }
                </div>
            }
        </div>
    )
}

export default withRouter(ChatRoom);