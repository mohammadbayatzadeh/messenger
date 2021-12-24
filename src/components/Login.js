import React from 'react';
import firebase from 'firebase/app';
import "firebase/auth"
import {firebaseConfig} from "../firebase"

//icons
import icon from "../icons/google.webp"

//styles
import styles from "./Login.module.css"


const Login = () => {
    return (
        <div className={styles.body}>
            <div className={styles.login_card}>
                <h2>Wellcome to messenger!</h2>
                <div  className={styles.login_button}
                onClick={()=> firebaseConfig.signInWithRedirect(new firebase.auth.GoogleAuthProvider()) }>
                    <img src={icon} alt="google icon"/> Sing In With Google!
                </div>
            </div>
        </div>
    );
};

export default Login;