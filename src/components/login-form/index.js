import React, {useState} from 'react'
import styles from './style.module.css'
import LoginImg from './../../images/block-user.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'


const LoginForm = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    return (
    <main className={styles.login_container}>
        <img src={LoginImg}/>
        <form className={styles.login_form}>
            <div className={styles.input_container}>
                <input type="email" placeholder="E-mail"/>
                <FontAwesomeIcon className={styles.input_image} icon={faEnvelope} color="black" />
            </div>
            <div className={styles.input_container}>
                <FontAwesomeIcon className={styles.input_image} icon={faKey} color="black" />
                <FontAwesomeIcon className={styles.show_hide_image} icon={passwordShown ? faEyeSlash : faEye} color="black" onClick={togglePasswordVisiblity} />
                <input type={passwordShown ? "text" : "password"} placeholder="Lozinka"/>
            </div>
            <div className={styles.text_container}>
                <div className={styles.checkbox_container}>
                    <input type="checkbox"/>
                    <label>Zapamti me</label>
                </div>
                <a href="#">Zaboravili ste lozinku?</a>
            </div>
            <input type="submit" value="Prijava"/>
        </form>
        <div className={styles.reg_container}>
            <p>Novi ste korisnik?</p>
            <Link to="/registration">Registrirajte se</Link>
        </div>
    </main>
)
}

export default LoginForm