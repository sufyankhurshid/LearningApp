import * as Yup from 'yup';

export const ShowDetailPostSchema = Yup.object().shape({
  id: Yup.string().required('Id is required'),
  title: Yup.string().required('Title is required'),
  body: Yup.string().min(10, 'Body is too short').required('Body is required'),
});
