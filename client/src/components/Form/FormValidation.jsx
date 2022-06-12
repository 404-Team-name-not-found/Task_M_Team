import formErrors from "./formErrors";
import { emailRegex } from "../../Regex";

const validateEmail = email => {
    return emailRegex.test(email);
}
export default function formValidation(username, email, password, repeatPassword, captcha, errors) {    
    const data_username = !!!username;
    const data_email_required = !!!email;
    const data_email_invalid = !validateEmail(email);
    const data_password = !!!password;
    const data_repeatPassword_required = !!!repeatPassword;
    const data_repeatPassword_match = !(repeatPassword == password);
    const data_status = ([data_username, data_email_required, data_email_invalid, data_password, data_repeatPassword_required, data_repeatPassword_match].filter((element) => element).length === 0 && captcha);

    return {
        status: { data: data_status },
        username: { required: { ...errors.username.required, display: data_username } },
        email: {
            required: { ...errors.email.required, display: data_email_required },
            invalid: { ...errors.email.invalid, display: data_email_invalid },
        },
        password: { required: { ...errors.password.required, display: data_password } },
        repeatPassword: {
            required: { ...errors.repeatPassword.required, display: data_repeatPassword_required },
            match: { ...errors.repeatPassword.match, display: data_repeatPassword_match }
        }
    }
}