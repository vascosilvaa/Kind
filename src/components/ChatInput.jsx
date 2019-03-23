import React, { useState } from 'react';
import { Mutation, ApolloConsumer } from "react-apollo";
import { ADD_MESSAGE } from '../graphql/mutations/chat';
import { GET_SCORE } from '../graphql/queries/chat';

const ChatInput = ({ id_room, id_user }) => {
    const [content, setContent] = useState('');
    return (
        <ApolloConsumer>
            {client => (
                <Mutation mutation={ADD_MESSAGE}>
                    {(newMessage, { data }) => (
                        <div className="chat-input" onKeyDown={e => { e.keyCode === 13 && _handleCreateMessage(content, newMessage, id_room, id_user, e => setContent(e), client) }}>
                            <input placeholder="Write your message..." value={content} onChange={e => setContent(e.target.value)} />
                            <button type="submit" onClick={() => _handleCreateMessage(content, newMessage, id_room, id_user, e => setContent(e), client)}><span className="fa fa-paper-plane" /></button>
                        </div>
                    )}
                </Mutation>
            )}
        </ApolloConsumer>
    )
}

const _handleCreateMessage = async (content, newMessage, id_room, id_user, setContent, client) => {
    if (content && content !== '') {
        const sentiment = await client.query({
            query: GET_SCORE,
            variables: { message: content }
        });
        await newMessage({ variables: { userId: id_user, roomId: id_room, content: content, score: sentiment.data.score.sentiment } });
        setContent('');
    } else {
        return undefined;
    }
}


export default ChatInput;