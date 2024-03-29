import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
                <Route path='/dialogs' render={() => <DialogsContainer state={props.state.dialogsPage} dispatch={props.dispatch} />} />
            </div>
        </div>
    )
}

export default App;