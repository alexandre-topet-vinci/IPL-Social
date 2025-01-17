function validatePassword(password) {
    if (password.length < 8) return false;
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
    if (!/\d/.test(password)) return false;
    return !/ipl/i.test(password);
}

export { validatePassword };