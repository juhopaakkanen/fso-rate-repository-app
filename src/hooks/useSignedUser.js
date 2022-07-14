import { useQuery } from '@apollo/client';

import { SIGNED_USER } from '../graphql/queries';

const useSignedUser = () => {
  const { data } = useQuery(SIGNED_USER, {
    fetchPolicy: 'cache-and-network'
  });

  return {
    user: data?.me
  };
};

export default useSignedUser;
