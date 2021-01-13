import auth from './auth-init'

let requestResult = false

export async function signin(email, password, remember = false) {
    try {
        await auth.login(email, password, remember)
        requestResult = true
    }
    catch {
        requestResult = false
    }

    return requestResult
}

export async function signup(fullname, username, email, password) {
    try {
        await auth.signup(email, password)
        await auth.login(email, password, false)
        const user = await auth.currentUser() 
        await user.update({ data: { full_name: fullname, username: username } })
        requestResult = true
    }
    catch {
        requestResult = false
    }

    return requestResult
}

