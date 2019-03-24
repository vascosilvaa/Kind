import React from 'react';
import Message from './Message';
import Constants from '../configs/constants';
import { Query } from 'react-apollo';
import { GET_PERSON_CLIENT } from '../graphql/queries/persons';
import Loader from './Loader';

class ChatSection extends React.PureComponent {
  componentDidMount() {
    this.props.subscribeToMore();
    console.log(this.messagesEnd);
    this.messagesEnd.scrollIntoView({ behavior: 'auto' });
  }

  componentDidUpdate() {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { messages } = this.props;

    return (
      <Query query={GET_PERSON_CLIENT}>
        {({ loading, error, data, client }) => {
          if (loading) return <Loader />;
          if (error) return <Loader />;
          return (
            <div className={`chat-section`}>
              {messages.length > 0 ? (
                messages.map(message => (
                  <Message
                    type={
                      message.user.id === data.user_logged.id
                        ? Constants.Message.sent
                        : Constants.Message.received
                    }
                    {...message}
                  />
                ))
              ) : (
                <div className="no-messages">No messages yet on this room.</div>
              )}
              <div
                ref={el => {
                  this.messagesEnd = el;
                }}
              />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ChatSection;
