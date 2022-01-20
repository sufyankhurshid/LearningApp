import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(4, 'Password is too Short!')
    .required('Firstname is required'),
  lastname: Yup.string()
    .min(4, 'Password is too Short!')
    .required('Lastname is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(4, 'Password is too Short!')
    .max(15, 'Password is too Long!')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .min(4, 'ConfirmPassword is too Short!')
    .max(15, 'ConfirmPassword is too Long!')
    .required('ConfirmPassword is required')
    .test(
      'Password-match',
      'Password and Confirm-Password are not  equal',
      function (value) {
        return this.parent.password === value;
      },
    ),
  phoneNumber: Yup.string().required('Phone number is required'),
});
