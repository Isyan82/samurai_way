import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({state, sendMessage, messageChange}) => {
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message}/> );
    let newMessageText = state.newMessageText

    const onSendMessageClick = () => {
        sendMessage()
    }
    const onMessageChange = (e) => {
        let text = e.target.value;
        messageChange(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div>
                        <textarea placeholder='Enter you message' onChange={onMessageChange} value={newMessageText}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;