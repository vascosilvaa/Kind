import React, { useState } from 'react';
import Constants from '../configs/constants';
import Avatar from './Avatar';

const Message = props => {
    switch (props.type) {
        default:
        case Constants.Message.sent: return _renderMessageSent(props);
        case Constants.Message.received: return _renderMessageReceived(props);
    }
}

const _renderMessageSent = ({ content }) => {
    const [kind, setKind] = useState(Math.random() >= 0.5);
    const [deleted, setDeleted] = useState(false);

    const _handleDelete = () => {
        setDeleted(true);
        setKind(true);
    }

    return (
        <div className="bot-wrapper">
            {!kind && <div className="bot-sent-advise-top bot-sent-advise-top--right padding-t-15"><span className="advise-alert">Auch... </span>Why are you being so mean?</div>}
            <div className='message message__sent' >
                {!kind && <Avatar type={Constants.Avatar.Bot} size={60} alt="bot" />}
                <div>
                    <div className={`message__baloon${deleted ? '--sent-deleted' : '--sent'}`}>
                        {deleted ? 'Your message was deleted.' : content}
                    </div>
                </div>
            </div>
            {!kind && (
                <>
                    <div className="bot-sent-advise-top bot-sent-advise-top--right">Sure you want to send it?</div>
                    <div className="bot-buttons bot-buttons--right">
                        <button>Yes</button>
                        <button onClick={_handleDelete}>No, delete it</button>
                    </div>
                </>
            )}

            {deleted && (
                <>
                    <div className="bot-sent-advise-top bot-sent-advise-top--right">You did the right thing, send a kinder message.</div>
                </>
            )}
        </div>
    )
}

const _renderMessageReceived = ({ content, user }) => {
    const [kind, setKind] = useState(Math.random() >= 0.5);
    const [deleted, setDeleted] = useState(false);

    const _handleDelete = () => {
        setDeleted(true);
        setKind(true);
    }

    return (
        <div className="bot-wrapper">
            {!kind && <div className="bot-sent-advise-top bot-sent-advise-top--left padding-t-15">This message contains strong words.</div>}
            <div className='message message__received'>
                <Avatar type={kind ? Constants.Avatar.Rounded : Constants.Avatar.Bot} size={kind ? 40 : 60} alt="test" src={user.photo} />
                <div className={`message__baloon${deleted ? '--received-deleted blur' : '--received'} ${kind ? '' : 'blur'}`}>
                    {content}
                </div>
            </div>
            {!kind && (
                <>
                    <div className="bot-sent-advise-top bot-sent-advise-top--left">Sure you want to see it?</div>
                    <div className="bot-buttons bot-buttons--left">
                        <button>Yes</button>
                        <button onClick={_handleDelete}>No, delete it</button>
                    </div>
                </>
            )}
            {deleted && (
                <>
                    <div className="bot-sent-advise-top bot-sent-advise-top--left">You did the right thing. You can report this user <strong>here</strong>.</div>
                </>
            )}
        </div>
    )
}

export default Message;