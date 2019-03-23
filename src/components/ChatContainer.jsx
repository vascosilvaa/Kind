import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from "react-apollo";
// import ChatInfo from './ChatInfo';
import ChatNavbar from './ChatNavbar';
import ChatSection from './ChatSection';
import ChatInput from './ChatInput';
import Loader from './Loader';
import { GET_CHAT_BY_ID } from '../graphql/queries/chat';
import { GET_MESSAGES_BY_ROOM } from '../graphql/queries/chat';
import { GET_PERSON_CLIENT } from '../graphql/queries/persons';
import { NEW_MESSAGE } from '../graphql/subscriptions/chat';

const ChatContainer = props => {
	return (
		<div className={`chat-container ${props.isCollapsed ? 'chat-container--collapsed' : ''}`}>
			<Query query={GET_PERSON_CLIENT}>
				{({ loading, error, data, client }) => {
					if (loading) return <Loader />;
					if (error) return <Loader />
					return (
						<Query query={GET_CHAT_BY_ID} variables={{ id: props.params, id_user: data.user_logged.id }}>
							{({ loading, error, data: dataChat }) => {
								if (loading) return <Loader />;
								if (error) return <Loader />
								return (
									<Query query={GET_MESSAGES_BY_ROOM} variables={{ id: dataChat.Room.id }}>
										{({ loading, error, data: dataMessages, subscribeToMore }) => {
											if (loading) return <Loader />;
											if (error) return <Loader />

											const more = () => subscribeToMore({
												document: NEW_MESSAGE,
												updateQuery: (prev, { subscriptionData }) => {
													if (!subscriptionData.data.Message.node) return prev;
													const newMessage = subscriptionData.data.Message.node;
													let newMessages = prev.Room.messages.push(newMessage);
													return newMessages;
												},
											});

											return (
												<div className="chat-container__wrapper">
													<ChatNavbar {...props} user={dataChat.Room.users[0]} />
													<div className="chat-panel">
														<ChatSection messages={dataMessages.Room.messages} subscribeToMore={more} />
														<ChatInput id_room={dataChat.Room.id} id_user={data.user_logged.id} />
													</div>
												</div>
											)
										}}
									</Query>
								)
							}}
						</Query>
					)
				}}
			</Query>
		</div>
	)
}

export default withRouter(ChatContainer);