function checkEmail(email) {
    if (!email) { throw 'Email must be given' }
    if (typeof email !== 'string') { throw 'Email must be of type string' }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) { throw 'Not a valid email' }
}

function checkUsername(username) {
    if (!username) { throw 'Username must be supplied' }
    if (typeof username !== 'string') { throw 'Username must be of type string' }
    if (username.length === 0) { throw 'Username must not be empty' }
    if (!/^[a-zA-Z0-9]*$/.test(username)) { throw 'Username can only be made up of alphanumeric characters a-z and 0-9' }
    if (username.length < 4) { throw 'Username must be at least 4 characters long' }
}

function checkPassword(password) {
    if (!password) { throw 'Password must be supplied' }
    if (typeof password !== 'string') { throw 'Password must be of type string' }
    if (password.length === 0) { throw 'Password must not be empty' }
    if (!/^[^\s]*$/.test(password)) { throw 'Password can not contain any spaces' }
    if (password.length < 6) { throw 'Password must be at least 6 characters long' }
}

module.exports = {
    checkEmail,
    checkUsername,
    checkPassword
};