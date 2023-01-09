const isEmail = (email) => {
    const charSchema =
        /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    return email.match(charSchema)
}

const isPasswordValid = (password) => {
    return password.length > 9
}

export { isEmail, isPasswordValid }
