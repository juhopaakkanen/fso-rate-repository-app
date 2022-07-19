import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (order) => {
  let sort, dir;
  switch (true) {
    case order === 'Latest':
      sort = 'CREATED_AT';
      dir = 'DESC';
      break;
    case order === 'Highest':
      sort = 'RATING_AVERAGE';
      dir = 'DESC';
      break;
    case order === 'Lowest':
      sort = 'RATING_AVERAGE';
      dir = 'ASC';
      break;
    default:
      throw new Error('invalid order');
  }

  const { data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy: sort, orderDirection: dir }
  });

  return {
    repositories: data?.repositories
  };
};

export default useRepositories;
