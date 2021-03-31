// Za sad nek samo stoji "Prijava" pa ćemo kasnije popunit sa imenima i dodat košaricu
import React, { useState } from 'react'
import Button from '../button'
import styles from './style.module.css'
import auth from '../../authentication/auth-init'
import Cart from "../checkout"


const ProfileNav = ({loggedIn}) => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(checkUserStatus());

    function checkUserStatus() {
        const user = auth.currentUser()
        if(user !== null) {
            return true
        }
        else {
            return false
        }
    }

    async function attemptLogout() {
        try {
            const user = auth.currentUser()
            await user.logout()
            setIsUserLoggedIn(false)
        }
        catch {
            setIsUserLoggedIn(true)
        }
    }

    

    return(
    <section className={styles.profile}>
        <Cart />
        <Button page={ isUserLoggedIn ? "/" : "/login" } action={ isUserLoggedIn ? () => attemptLogout() : () => {}} style={styles.login_button} text= { isUserLoggedIn ? "Odjava" : "Prijava" }/>
    </section>
    )
}

export default ProfileNav