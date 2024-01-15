import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogsReducer';


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/> );
    let newMessageText = props.state.newMessageText

    const onSendMessageClick = () => {
        let action = sendMessageCreator()
        props.dispatch(action)
    }
    const onMessageChange = (e) => {
        let text = e.target.value;
        let action = updateNewMessageTextCreator(text)
        props.dispatch(action)
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