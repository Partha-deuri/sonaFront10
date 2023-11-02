import toast from 'react-hot-toast'


/** validate password */
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);

    return errors;
}

/** validate reset password */
export async function resetPasswordValidation(values) {
    const errors = passwordVerify({}, values);

    if (values.password !== values.confirm_pwd) {
        errors.exist = toast.error("Password not match...!");
    }

    return errors;
}

/** validate register form */
export async function registerValidation(values) {
    const errors = emailVerify({}, values);
    passwordVerify(errors, values);
    phoneVerify(errors, values);
    nameVerify(errors, values);

    return errors;
}
/** validate login form */
export async function loginValidation(values) {
    const errors = emailVerify({}, values);
    passwordVerify(errors, values);
    return errors;
}

/** validate profile page */
export async function profileValidation(values) {
    const errors = emailVerify({}, values);
    return errors;
}


/** ************************************************* */

/** validate password */
function passwordVerify(errors = {}, values) {
    /* eslint-disable no-useless-escape */
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!values.password) {
        errors.password = toast.error("Password Required...!");
    } else if (values.password.includes(" ")) {
        errors.password = toast.error("Wrong Password...!");
    } else if (values.password.length < 6) {
        errors.password = toast.error("Password must be more than 4 characters long");
    } else if (!specialChars.test(values.password)) {
        errors.password = toast.error("Password must have special character");
    }

    return errors;
}


/** validate username */
function nameVerify(error = {}, values) {
    if (!values.name) {
        error.name = toast.error('Name Required...!');
    } else if (values.name.length < 3) {
        error.name = toast.error('Name should conatin at least 3 char')
    }

    return error;
}

/** validate email */
function emailVerify(error = {}, values) {
    if (!values.email) {
        error.email = toast.error("Email Required...!");
    } else if (values.email.includes(" ")) {
        error.email = toast.error("Wrong Email...!")
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = toast.error("Invalid email address...!")
    }

    return error;
}

// phone verify
function phoneVerify(error = {}, values) {
    if (!values.phone) {
        error.email = toast.error("Phone number Required...!");
    } else if ((values.phone + "").length !== 10) {
        error.phone = toast.error('phone number should be of 10 digits')
    }

    return error;
}