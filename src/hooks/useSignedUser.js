import { useQuery } from '@apollo/client';

import { SIGNED_USER } from '../graphql/queries';

const useSignedUser = (includeReviews = false) => {
  const { data } = useQuery(SIGNED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews }
  });

  return {
    user: data?.me
  };
};

export default useSignedUser;
