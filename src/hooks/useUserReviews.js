import { useQuery } from '@apollo/client';

import { SIGNED_USER } from '../graphql/queries';

const useUserReviews = () => {
  const { data } = useQuery(SIGNED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews: true }
  });

  return {
    reviews: data?.me.reviews
  };
};

export default useUserReviews;
