import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router';

import ReviewForm from './ReviewForm';
import useCreateReview from '../../hooks/useCreateReview';

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .typeError('Rating must be a number')
    .min(0, 'Rating must be between 0-100')
    .max(100, 'Rating must be between 0-100'),
  text: yup.string().notRequired()
});

const AddReview = () => {
  const [addReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const { repositoryId } = await addReview({
        ...values,
        rating: parseInt(values.rating)
      });
      navigate(`/${repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={{
        ownerName: '',
        repositoryName: '',
        rating: '',
        text: ''
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default AddReview;
