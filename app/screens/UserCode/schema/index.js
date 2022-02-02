import * as Yup from 'yup';

export const UserCodeSchema = Yup.object().shape({
  code: Yup.string().required('Code is required'),
});
