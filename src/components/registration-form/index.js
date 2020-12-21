import React, {useState} from 'react'
import styles from './style.module.css'
import RegistrationImg from './../../images/add-user.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

const RegistrationForm = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordConfirmShown, setPasswordConfirmShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const togglePasswordConfirmVisiblity = () => {
        setPasswordConfirmShown(passwordConfirmShown ? false : true);
    };
    return (
    <main className={styles.registration_container}>
        <img src={RegistrationImg}/>
        <form className={styles.registration_form}>
            <div className={styles.input_container}>
                <input type="text" placeholder="Ime"/>
                <FontAwesomeIcon className={styles.input_image} icon={faUser} color="black" />
            </div>
            <div className={styles.input_container}>
                <input type="text" placeholder="Prezime"/>
                <FontAwesomeIcon className={styles.input_image} icon={faUser} color="black" />
            </div>
            <div className={styles.input_container}>
                <input type="text" placeholder="Korisničko ime"/>
                <FontAwesomeIcon className={styles.input_image} icon={faUser} color="black" />
            </div>
            <div className={styles.input_container}>
                <input type="email" placeholder="E-mail"/>
                <FontAwesomeIcon className={styles.input_image} icon={faEnvelope} color="black" />
            </div>
            <div className={styles.input_container}>
                <FontAwesomeIcon className={styles.input_image} icon={faKey} color="black" />
                <FontAwesomeIcon className={styles.show_hide_image} icon={passwordShown ? faEyeSlash : faEye} color="black" onClick={togglePasswordVisiblity} />
                <input type={passwordShown ? "text" : "password"} placeholder="Lozinka"/>
            </div>
            <div className={styles.input_container}>
                <FontAwesomeIcon className={styles.input_image} icon={faKey} color="black" />
                <FontAwesomeIcon className={styles.show_hide_image} icon={passwordConfirmShown ? faEyeSlash : faEye} color="black" onClick={togglePasswordConfirmVisiblity} />
                <input type={passwordConfirmShown ? "text" : "password"} placeholder="Potvrdi lozinku"/>
            </div>
            <input type="submit" value="Registracija"/>
        </form>
        <div className={styles.reg_container}>
            <p>Postojeći ste korisnik?</p>
            <Link to="/login">Prijavite se</Link>
        </div>
    </main>
)
}
export default RegistrationForm