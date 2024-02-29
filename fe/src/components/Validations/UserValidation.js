import * as yup from "yup";

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
        .string()
        .required()
        .min(6, 'Password must be at least 6 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
    rePassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password'),
});

