import { useQuery } from '@apollo/client';

import { GET_SIGNED_USER } from '../graphql/queries';

const useSignedUser = (includeReviews = false) => {
  const { data, refetch } = useQuery(GET_SIGNED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews }
  });

  return {
    user: data?.me,
    refetch: refetch
  };
};

export default useSignedUser;
