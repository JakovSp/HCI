const emailValidation = (email = "") => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null
  }
  if (email.trim() === "") {
    return "Popunite ovo polje."
  }
  return "Upišite valjani e-mail."
}

const textValidation = (text = "") => {
  if (text.trim() === "") {
    return "Popunite ovo polje."
  }
  if (/[^a-zA-Z -]/.test(text)) {
    return "Nemojte koristiti brojeve."
  }
  if (text.trim().length < 3) {
    return "Mora biti barem 3 slova"
  }
  return null
}

const passwordValidation = (password = "") => {
  if (password.trim() === "") {
    return "Popunite ovo polje."
  }
  if (password.trim().length < 6) {
    return "Mora biti barem 6 slova"
  }
  return null
}

const confirmPasswordValidation = (password = "", repeatPassword = "") => {
    if(password.trim() !== "") {
        if (password !== repeatPassword) {
            return "Lozinke se ne podudaraju."
          }
    }
 
  return null
}

export const validation = {
  emailValidation,
  textValidation,
  passwordValidation,
  confirmPasswordValidation,
}
