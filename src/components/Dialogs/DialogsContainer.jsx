import React from 'react';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    const sendMessage = () => {
        let action = sendMessageCreator()
        props.dispatch(action)
    }
    const messageChange = (text) => {
        let action = updateNewMessageTextCreator(text)
        props.dispatch(action)
    }

    return (
        <Dialogs state={props.state} sendMessage={sendMessage} messageChange={messageChange}/>
    )
}

export default DialogsContainer;