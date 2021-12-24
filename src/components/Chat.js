import React from 'react';
import { useNavigate } from 'react-router-dom';
import { firebaseConfig } from '../firebase';
import {ChatEngine} from "react-chat-engine"


//components
import Nav from './Nav';


const Chat = () => {

    const history=useNavigate();
    const logouthandler = async()=>{
        await firebaseConfig.signOut();
        history('/')
    }

    return (
        <div>
            <Nav logouthandler={logouthandler} />
            <ChatEngine
            height="clalc(100vh - 50px)"
            projectID="7a65bda4-74b0-412f-b09b-2f2ae61f16e7"
            userName="."
            userSecret=""
            />
        </div>
    );
};

export default Chat;