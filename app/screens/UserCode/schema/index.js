import * as Yup from 'yup';

export const UserCodeSchema = Yup.object().shape({
  code: Yup.number().required('Code is required'),
});
