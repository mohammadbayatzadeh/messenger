import React from 'react';

//styles
import styles from "./Nav.module.css"
const Nav = ({logouthandler}) => {
    return (
        <div>
            <div className={styles.container}>
                <h2>Messenger</h2>
                <button 
                className={styles.logout}
                onClick={logouthandler}>Logout</button>
            </div>
        </div>
    );
};

export default Nav;