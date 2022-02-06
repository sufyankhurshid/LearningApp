import * as Yup from 'yup';

export const TodoSchema = Yup.object().shape({
  task: Yup.string().required('Task is required'),
});
