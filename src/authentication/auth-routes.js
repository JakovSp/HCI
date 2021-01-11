import auth from './auth-init'

export function signin(email, password, remember = false) {
    auth
        .login(email, password, remember)
        .then((response) => {
            //redirect
        })
        .catch((error) => {
            console.log('Failed :( ' + JSON.stringify(error))
        })
    }

export function signup(fullname, username, email, password) {
    auth
        .signup(email, password)
        .then(() => {
            registrationSignin(fullname, username, email, password)
        })
        .catch((error) => console.log('Failure!', error))
}

function registrationUpdate(fullname, username) {
    const user = auth.currentUser()
    user.update({ data: { full_name: fullname, username: username } })
        .then((user) => console.log(user))
        .catch((error) => {
            console.log('Failed to update user: %o', error);
            throw error;
        });
}

function registrationSignin(fullname, username, email, password) {
    auth
        .login(email, password, false)
        .then(() => {
            registrationUpdate(fullname, username)
        })
        .catch((error) => {
            console.log('Failed :( ' + JSON.stringify(error))
        })
}

