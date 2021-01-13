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
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [passwordError, setPasswordError] = useState();
    const [confirmPasswordError, setConfirmPasswordError] = useState();

    const generalErrorMessage = "Korisnik sa tom e-mail adresom već postoji."

    async function attemptSignup(firstname, lastname, username, email, password, confirmPassword) {
        setIsSubmitted(true)
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

        if((emailError === null && passwordError === null && textErrorName === null && textErrorLastname === null && textErrorUsername === null && confirmPasswordError === null)) { 
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
                <input style={{ borderColor: (isSubmitted) ? ((textErrorName === null) || (typeof(textErrorName) === "undefined")) ? '#004e7c' : '#FF0033' : '' }} type="text" placeholder="Ime" onChange={e => {
                    setFirstname(e.target.value)
                    setTextErrorName(validation.textValidation(e.target.value))
                }}/>
                <FontAwesomeIcon className={styles.input_image} icon={faUser} color="black" />
                <p>{ (isSubmitted) ? textErrorName : null }</p>
            </div>
            <div className={styles.input_container}>
                <input style={{borderColor: (isSubmitted) ? ((textErrorLastname === null) || (typeof(textErrorLastname) === "undefined")) ? '#004e7c' : '#FF0033' : ''}} type="text" placeholder="Prezime" onChange={e => {
                    setLastname(e.target.value)
                    setTextErrorLastname(validation.textValidation(e.target.value))
                }}/>
                <FontAwesomeIcon className={styles.input_image} icon={faUser} color="black" />
                <p>{ (isSubmitted) ? textErrorLastname : null }</p>
            </div>
            <div className={styles.input_container}>
                <input style={{borderColor: (isSubmitted) ? ((textErrorUsername === null) || (typeof(textErrorUsername) === "undefined")) ? '#004e7c' : '#FF0033' : ''}} type="text" placeholder="Korisničko ime" onChange={e => { 
                    setUsername(e.target.value)
                    setTextErrorUsername(validation.textValidation(e.target.value))
                }}/>
                <FontAwesomeIcon className={styles.input_image} icon={faUser} color="black" />
                <p>{ (isSubmitted) ? textErrorUsername : null }</p>
            </div>
            <div className={styles.input_container}>
                <input style={{borderColor: (isSubmitted) ? ((emailError === null) || (typeof(emailError) === "undefined")) ? '#004e7c' : '#FF0033' : ''}} type="email" placeholder="E-mail" onChange={e => { 
                    setEmail(e.target.value)
                    setEmailError(validation.emailValidation(e.target.value))
                }}/>
                <FontAwesomeIcon className={styles.input_image} icon={faEnvelope} color="black" />
                <p>{ (isSubmitted) ? emailError : null}</p>
            </div>
            <div className={styles.input_container}>
                <FontAwesomeIcon className={styles.input_image} icon={faKey} color="black" />
                <FontAwesomeIcon className={styles.show_hide_image} icon={passwordShown ? faEyeSlash : faEye} color="black" onClick={togglePasswordVisiblity} />
                <input style={{borderColor: (isSubmitted) ? ((passwordError === null) || (typeof(passwordError) === "undefined")) ? '#004e7c' : '#FF0033' : ''}} type={passwordShown ? "text" : "password"} placeholder="Lozinka" onChange={e => { 
                    setPassword(e.target.value)
                    setPasswordError(validation.passwordValidation(e.target.value))
                }}/>
                <p>{ (isSubmitted) ? passwordError : null}</p>
            </div>
            <div className={styles.input_container}>
                <FontAwesomeIcon className={styles.input_image} icon={faKey} color="black" />
                <FontAwesomeIcon className={styles.show_hide_image} icon={passwordConfirmShown ? faEyeSlash : faEye} color="black" onClick={togglePasswordConfirmVisiblity} />
                <input style={{borderColor: (isSubmitted) ? ((confirmPasswordError === null) || (typeof(confirmPasswordError) === "undefined")) ? '#004e7c' : '#FF0033' : ''}} type={passwordConfirmShown ? "text" : "password"} placeholder="Potvrdi lozinku" onChange={e => { 
                    setConfirmPassword(e.target.value)
                    setConfirmPasswordError(validation.confirmPasswordValidation(password, e.target.value))
                }}/>
                <p>{ (isSubmitted) ? confirmPasswordError : null}</p>
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