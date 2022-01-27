import * as Yup from 'yup';

export const CreatePostSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Title is too short..! ')
    .required('Title is required'),
  body: Yup.string().min(10, 'Body is too short').required('Body is required'),
});
