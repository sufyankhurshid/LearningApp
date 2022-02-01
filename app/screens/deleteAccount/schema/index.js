import * as Yup from 'yup';

export const DeleteAccountSchema = Yup.object().shape({
  code: Yup.string().required('Code is required'),
});
