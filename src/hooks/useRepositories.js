import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const parseOrder = (order) => {
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
  return { sort, dir };
};

const useRepositories = (order, searchKeyword) => {
  const { sort, dir } = parseOrder(order);
  const variables = {
    first: 8,
    orderBy: sort,
    orderDirection: dir,
    searchKeyword: searchKeyword
  };

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables
      }
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    ...result
  };
};

export default useRepositories;
