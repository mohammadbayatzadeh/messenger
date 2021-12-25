import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { firebaseConfig } from '../firebase';
import { ChatEngine } from "react-chat-engine"
import axios from 'axios'


//components
import Nav from './Nav';

//context
import { ConfigContext } from '../context/ConfigContextProvider';

const Chat = () => {
    const [loading, setLoading] = useState(true);
    const user = useContext(ConfigContext)
    const history = useNavigate();

    useEffect(() => {
        if (!user) {
            history('/');
            return;
        }
        axios.get('https://api.chatengine.io/users/me/', {
            headers: {
                "project-id": "7a65bda4-74b0-412f-b09b-2f2ae61f16e7",
                "user-name": user.displayName,
                "user-secret": user.uid
            }
        })
            .then(() => {
                setLoading(false)
            })
            .catch(() => {
                let formdata = new FormData();
                formdata.append("email", user.email);
                formdata.append("username", user.displayName);
                formdata.append("secret", user.uid);
                fileData(user.photoURL)
                    .then(avatar => {
                        formdata.append("avatar", avatar, avatar.name)
                        axios.post('https://api.chatengine.io/users/', formdata, {
                            headers: {
                                "private-key": "6a92180a-5db3-4289-bb02-4986cf75bf32"
                            }
                        })
                            .then(() => setLoading(false))
                            .catch(error => console.log(error))
                    })
            })

    }, [user, history])

    const fileData = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userAvatar.jpg", { type: "image/jpeg" })

    }


    const logouthandler = async () => {
        await firebaseConfig.signOut();
        history('/');
    }

    if (!user || loading) return "loading..."

    return (
        <div>
            <Nav logouthandler={logouthandler} />

            <ChatEngine
                height="calc(100vh - 50px)"
                projectID="7a65bda4-74b0-412f-b09b-2f2ae61f16e7"
                userName={user.displayName}
                userSecret={user.uid}
            />
        </div>
    );
};

export default Chat;