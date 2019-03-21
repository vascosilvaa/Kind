import React from 'react';
import Message from './Message';
import Constants from '../configs/constants';

const ChatSection = () => (
	<div className={`chat-section`}>
		<Message type={Constants.Message.received} />
		<Message type={Constants.Message.sent} />
		<Message type={Constants.Message.received} />
		<Message type={Constants.Message.sent} />
		<Message type={Constants.Message.received} />
		<Message type={Constants.Message.sent} />
		<Message type={Constants.Message.bot} />
		<Message type={Constants.Message.received} />
		<Message type={Constants.Message.sent} />
		<Message type={Constants.Message.received} />
		<Message type={Constants.Message.bot} />
		<Message type={Constants.Message.sent} />
		<Message type={Constants.Message.received} />
		<Message type={Constants.Message.sent} />
		<Message type={Constants.Message.received} />
		<Message type={Constants.Message.sent} />
		<Message type={Constants.Message.sent} />
		<Message type={Constants.Message.received} />
		<Message type={Constants.Message.sent} />
		<Message type={Constants.Message.received} />
		<Message type={Constants.Message.sent} />
		<Message type={Constants.Message.received} />
		<Message type={Constants.Message.sent} />
		<Message type={Constants.Message.received} />
		<Message type={Constants.Message.sent} />
		<Message type={Constants.Message.received} />
		<Message type={Constants.Message.sent} />
	</div>
)

export default ChatSection;