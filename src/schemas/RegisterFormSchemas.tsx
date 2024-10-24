import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
    user_email: yup.string()
        .email("Enter valid email address")
        .required("Email address is required"),
    user_phone: yup.number()
        .integer("Enter integer")
        .required("Mobile required field"),
    user_message: yup.string()
        .required("Messages required field"),

});
