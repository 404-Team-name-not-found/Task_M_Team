import formErrors from "./formErrors";
import { emailRegex } from "../../Regex";

const validateEmail = email => {
    return emailRegex.test(email);
}
export default function formValidation(username, email, password, captcha) {
    const data_username = username ? formErrors.none : formErrors.required;
    const data_email = email ? (validateEmail(email) ? formErrors.none : formErrors.email) : formErrors.required;
    const data_password = password ? formErrors.none : formErrors.required;
    const data_status = ([data_username, data_email, data_password].toString().length === 0 && captcha) ? true : false;
    return {
        status: data_status,
        username: data_username,
        email: data_email,
        password: data_password
    }
}