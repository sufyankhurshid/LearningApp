import * as Yup from 'yup';

export const VerificationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  code: Yup.string().required('Code is required'),
});
