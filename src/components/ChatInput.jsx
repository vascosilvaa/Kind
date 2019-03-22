import React, { useState } from 'react';
import { Mutation } from "react-apollo";

import { ADD_MESSAGE } from '../graphql/mutations/chat';

const ChatInput = ({ id_room, id_user }) => {
    const [content, setContent] = useState('');
    return (
        <Mutation mutation={ADD_MESSAGE}>
            {(newMessage, { data }) => (
                <div className="chat-input">
                    <input placeholder="Write your message..." value={content} onChange={e => setContent(e.target.value)} />
                    <button onClick={() => _handleCreateMessage(content, newMessage, id_room, id_user, e => setContent(e))}><span className="fa fa-paper-plane" /></button>
                </div>
            )}

        </Mutation>
    )
}

const _handleCreateMessage = async (content, newMessage, id_room, id_user, setContent) => {
    console.log(id_user, id_room, content)
    if (content && content !== '') {
        await newMessage({ variables: { userId: id_user, roomId: id_room, content: content } });
        setContent('');
    } else {
        return undefined;
    }
}


export default ChatInput;