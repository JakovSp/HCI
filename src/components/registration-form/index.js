import React, {useState} from 'react'
import styles from './style.module.css'
import RegistrationImg from './../../images/add-user.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import  { signup } from '../../authentication/auth-routes'

const RegistrationForm = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordConfirmShown, setPasswordConfirmShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const togglePasswordConfirmVisiblity = () => {
        setPasswordConfirmShown(passwordConfirmShown ? false : true);
    };
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstname] = useState();
    const [lastName, setLastname] = useState();
    const [username, setUsername] = useState();
    return (
    <main className={styles.registration_container}>
        <img src={RegistrationImg}/>
        <form className={styles.registration_form} onsubmit="return false">
            <div className={styles.input_container}>
                <input type="text" placeholder="Ime" onChange={e => setFirstname(e.target.value)}/>
                <FontAwesomeIcon className={styles.input_image} icon={faUser} color="black" />
            </div>
            <div className={styles.input_container}>
                <input type="text" placeholder="Prezime" onChange={e => setLastname(e.target.value )}/>
                <FontAwesomeIcon className={styles.input_image} icon={faUser} color="black" />
            </div>
            <div className={styles.input_container}>
                <input type="text" placeholder="Korisničko ime" onChange={e => setUsername(e.target.value)}/>
                <FontAwesomeIcon className={styles.input_image} icon={faUser} color="black" />
            </div>
            <div className={styles.input_container}>
                <input type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                <FontAwesomeIcon className={styles.input_image} icon={faEnvelope} color="black" />
            </div>
            <div className={styles.input_container}>
                <FontAwesomeIcon className={styles.input_image} icon={faKey} color="black" />
                <FontAwesomeIcon className={styles.show_hide_image} icon={passwordShown ? faEyeSlash : faEye} color="black" onClick={togglePasswordVisiblity} />
                <input type={passwordShown ? "text" : "password"} placeholder="Lozinka" onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className={styles.input_container}>
                <FontAwesomeIcon className={styles.input_image} icon={faKey} color="black" />
                <FontAwesomeIcon className={styles.show_hide_image} icon={passwordConfirmShown ? faEyeSlash : faEye} color="black" onClick={togglePasswordConfirmVisiblity} />
                <input type={passwordConfirmShown ? "text" : "password"} placeholder="Potvrdi lozinku"/>
            </div>
            <input onClick={ () => signup(firstName + lastName, username, email, password) } type="button" value="Registracija"/>
        </form>
        <div className={styles.reg_container}>
            <p>Postojeći ste korisnik?</p>
            <Link to="/login">Prijavite se</Link>
        </div>
    </main>
)
}
export default RegistrationForm