import React, {useState} from 'react'
import styles from './style.module.css'
import LoginImg from './../../images/block-user.svg'
import ErrorImg from './../../images/warning.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link, navigate } from 'gatsby'
import { signin } from '../../authentication/auth-routes'
import { validation } from '../../helpers/form-validation'

const LoginForm = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [remember, setRemember] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [isGeneralError, setIsGeneralError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const generalErrorMessage = "E-mail adresa ili zaporka je netočna"

    async function attemptSignin(email, password, remember) {
        setIsSubmitted(true)
        if(ValidateForm(email, password)) {
            setIsLoading(true)
            setIsGeneralError(false)
            let result = await signin(email, password, remember)
            if(result === true) {
                setIsLoading(false)
                navigate("/") 
            }
            else {
                setIsLoading(false)
                setIsGeneralError(true)
            }
        }
    };

    function ValidateForm(email, password) {
        setEmailError(validation.emailValidation(email))
        setPasswordError(validation.passwordValidation(password))
        
        if((emailError === null && passwordError === null)) { 
            return true 
        } 
        else {
            return false
        }
    }

    return (
    <main className={styles.login_container}>
        <img src={LoginImg}/>
        <div className={styles.error_message} style={{visibility: isGeneralError ? 'visible' : 'hidden'}}>
            <img src={ErrorImg} alt=''/>
            <p>{generalErrorMessage}</p>
        </div>
        <div className={styles.loader} style={{visibility: isLoading ? 'visible' : 'hidden'}}>
            <svg className={styles.circular}>
            <circle className={styles.path} cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
            </svg>
        </div>
        <form className={ isLoading ? styles.login_form_disable : styles.login_form}>
            <div className={styles.input_container}>
                <input style={{ borderColor: (isSubmitted) ? ((emailError === null) || (typeof(emailError) === "undefined")) ? '#004e7c' : '#FF0033' : '' }} type="email" placeholder="E-mail" onChange={e => { 
                    setEmail(e.target.value)
                    setEmailError(validation.emailValidation(e.target.value))
                }}/>
                <FontAwesomeIcon className={styles.input_image} icon={faEnvelope} color="black" />
                <p>{ (isSubmitted) ? emailError : null }</p>
            </div>
            <div className={styles.input_container}>
                <FontAwesomeIcon className={styles.input_image} icon={faKey} color="black" />
                <FontAwesomeIcon className={styles.show_hide_image} icon={passwordShown ? faEyeSlash : faEye} color="black" onClick={togglePasswordVisiblity} />
                <input style={{ borderColor: (isSubmitted) ? ((passwordError === null) || (typeof(passwordError) === "undefined")) ? '#004e7c' : '#FF0033' : '' }} type={passwordShown ? "text" : "password"} placeholder="Lozinka" onChange={e => { 
                    setPassword(e.target.value)
                    setPasswordError(validation.passwordValidation(e.target.value))
                }}/>
                <p>{ (isSubmitted) ? passwordError : null }</p>
            </div>
            <div className={styles.text_container}>
                <div className={styles.checkbox_container}>
                    <input type="checkbox" onClick={ () => setRemember(!remember) }/>
                    <label>Zapamti me</label>
                </div>
                <a href="#">Zaboravili ste lozinku?</a>
            </div>
            <input onClick={ () => attemptSignin(email, password, remember) } type="button" value = { isLoading ? "Učitavanje..." : "Prijava" }/>
        </form>
        <div className={styles.reg_container}>
            <p>Novi ste korisnik?</p>
            <Link className={isLoading ? styles.disabled_link : ''} to="/registration">Registrirajte se</Link>
        </div>
    </main>
)
}

export default LoginForm