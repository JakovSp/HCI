import React, {useState} from 'react'
import styles from './style.module.css'
import RegistrationImg from './../../images/add-user.svg'
import ErrorImg from './../../images/warning.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, navigate } from 'gatsby'
import  { signup } from '../../authentication/auth-routes'
import { validation } from '../../helpers/form-validation'

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
    const [confirmPassword, setConfirmPassword] = useState();
    const [firstName, setFirstname] = useState();
    const [lastName, setLastname] = useState();
    const [username, setUsername] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isGeneralError, setIsGeneralError] = useState(false);
    const [textErrorName, setTextErrorName] = useState();
    const [textErrorLastname, setTextErrorLastname] = useState();
    const [textErrorUsername, setTextErrorUsername] = useState();
    const [emailError, setEmailError] = useState();

    const [passwordError, setPasswordError] = useState();
    const [confirmPasswordError, setConfirmPasswordError] = useState();

    const generalErrorMessage = "Dogodila se greška. Molimo ponovite kasnije."

    async function attemptSignup(firstname, lastname, username, email, password, confirmPassword) {
        if(ValidateForm(firstname, lastname, username, email, password, confirmPassword)) {
            setIsLoading(true)
            setIsGeneralError(false)
            let result = await signup(firstname + " " + lastname, username, email, password)
            if(result === true) {
                setIsLoading(false)
                navigate("/") 
            }
            else {
                setIsLoading(false)
                setIsGeneralError(true)
                setTimeout(function() { setIsGeneralError(false) }, 5000);
            }
        }
    };

    function ValidateForm(firstname, lastname, username, email, password, confirmPassword) {
        setEmailError(validation.emailValidation(email))
        setPasswordError(validation.passwordValidation(password))
        setTextErrorUsername(validation.textValidation(username))
        setTextErrorName(validation.textValidation(firstname))
        setTextErrorLastname(validation.textValidation(lastname))
        setConfirmPasswordError(validation.confirmPasswordValidation(password, confirmPassword))

        if((emailError === null && passwordError === null && textErrorName === null && textErrorLastname === null && textErrorUsername === null && confirmPasswordError === null)
        || (typeof(emailError) === "undefined" && typeof(passwordError) === "undefined" && typeof(textErrorName) === "undefined" && typeof(textErrorLastname) === "undefined" && typeof(passwotextErrorUsernamerdError) === "undefined" && typeof(confirmPasswordError) === "undefined")) { 
            return true 
        } 
        else {
            return false
        }
    }

    return (
    <main className={styles.registration_container}>
        <img src={RegistrationImg}/>
        <div className={styles.error_message} style={{visibility: isGeneralError ? 'visible' : 'hidden'}}>
            <img src={ErrorImg} alt=''/>
            <p>{generalErrorMessage}</p>
        </div>
        <div className={styles.loader} style={{visibility: isLoading ? 'visible' : 'hidden'}}>
            <svg className={styles.circular}>
            <circle className={styles.path} cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
            </svg>
        </div>
        <form className={ isLoading ? styles.registration_form_disable : styles.registration_form}>
            <div className={styles.input_container}>
                <input type="text" placeholder="Ime" onChange={e => {
                    setFirstname(e.target.value)
                    if(typeof(textErrorName) !== "undefined") {
                        setTextErrorName(validation.textValidation(e.target.value))
                    }
                }}/>
                <FontAwesomeIcon className={styles.input_image} icon={faUser} color="black" />
                <p>{textErrorName}</p>
            </div>
            <div className={styles.input_container}>
                <input type="text" placeholder="Prezime" onChange={e => {
                    setLastname(e.target.value)
                    if(typeof(textErrorName) !== "undefined") {
                        setTextErrorLastname(validation.textValidation(e.target.value))
                    }
                }}/>
                <FontAwesomeIcon className={styles.input_image} icon={faUser} color="black" />
                <p>{textErrorLastname}</p>
            </div>
            <div className={styles.input_container}>
                <input type="text" placeholder="Korisničko ime" onChange={e => { 
                    setUsername(e.target.value)
                    if(typeof(textErrorName) !== "undefined") {
                        setTextErrorUsername(validation.textValidation(e.target.value))
                    }
                }}/>
                <FontAwesomeIcon className={styles.input_image} icon={faUser} color="black" />
                <p>{textErrorUsername}</p>
            </div>
            <div className={styles.input_container}>
                <input type="email" placeholder="E-mail" onChange={e => { 
                    setEmail(e.target.value)
                    if(typeof(emailError) !== "undefined") {
                        setEmailError(validation.emailValidation(e.target.value))
                    }
                }}/>
                <FontAwesomeIcon className={styles.input_image} icon={faEnvelope} color="black" />
                <p>{emailError}</p>
            </div>
            <div className={styles.input_container}>
                <FontAwesomeIcon className={styles.input_image} icon={faKey} color="black" />
                <FontAwesomeIcon className={styles.show_hide_image} icon={passwordShown ? faEyeSlash : faEye} color="black" onClick={togglePasswordVisiblity} />
                <input type={passwordShown ? "text" : "password"} placeholder="Lozinka" onChange={e => { 
                    setPassword(e.target.value)
                    if(typeof(passwordError) !== "undefined") {
                        setPasswordError(validation.passwordValidation(e.target.value))
                    }
                }}/>
                <p>{passwordError}</p>
            </div>
            <div className={styles.input_container}>
                <FontAwesomeIcon className={styles.input_image} icon={faKey} color="black" />
                <FontAwesomeIcon className={styles.show_hide_image} icon={passwordConfirmShown ? faEyeSlash : faEye} color="black" onClick={togglePasswordConfirmVisiblity} />
                <input type={passwordConfirmShown ? "text" : "password"} placeholder="Potvrdi lozinku" onChange={e => { 
                    setConfirmPassword(e.target.value)
                    if(typeof(confirmPasswordError) !== "undefined") {
                        setConfirmPasswordError(validation.confirmPasswordValidation(password, e.target.value))
                    }
                }}/>
                <p>{confirmPasswordError}</p>
            </div>
            <input onClick={ () => attemptSignup(firstName, lastName, username, email, password, confirmPassword) } type="button" value = { isLoading ? "Učitavanje..." : "Registracija" }/>
        </form>
        <div className={styles.reg_container}>
            <p>Postojeći ste korisnik?</p>
            <Link className={isLoading ? styles.disabled_link : ''} to="/login">Prijavite se</Link>
        </div>
    </main>
)
}
export default RegistrationForm