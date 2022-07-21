import { useQuery } from '@apollo/client';

import { GET_SIGNED_USER } from '../graphql/queries';

const useSignedUser = (includeReviews = false) => {
  const { data, loading } = useQuery(GET_SIGNED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews }
  });

  return {
    user: data?.me,
    loading
  };
};

export default useSignedUser;
