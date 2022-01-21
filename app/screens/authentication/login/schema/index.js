import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(4, 'Password is too Short!')
    .max(10, 'Password is too Long!')
    .required('Password is required'),
});
