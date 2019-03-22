import React from 'react';
import Message from './Message';
import Constants from '../configs/constants';
import { Query } from "react-apollo";
import { GET_PERSON_CLIENT } from '../graphql/queries/persons';
import { GET_MESSAGES_BY_ROOM } from '../graphql/queries/chat';
import Loader from './Loader';

class ChatSection extends React.PureComponent {
	componentDidMount() {
		this.props.subscribeToMore();
	}
	render() {
		const { messages } = this.props;

		return (
			<Query query={GET_PERSON_CLIENT}>
				{({ loading, error, data, client }) => {
					if (loading) return <Loader />;
					if (error) return `Error! ${error.message}`;
					return (

						<div className={`chat-section`}>
							{messages.length > 0
								? messages.map(message => <Message type={message.user.id === data.user_logged.id ? Constants.Message.sent : Constants.Message.received} {...message} />)
								: <div>No messages yet.</div>
							}
						</div>
					)
				}}
			</Query>
		)
	}
}

export default ChatSection;