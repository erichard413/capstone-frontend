function validateEmail(email) {
    const format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return format.test(email);
}

export default validateEmail;