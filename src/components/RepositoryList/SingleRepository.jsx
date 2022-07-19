import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import useRepository from '../../hooks/useRepository';
import useReviews from '../../hooks/useReviews';

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);
  const { reviews } = useReviews(id);

  if (!repository) {
    return null;
  }

  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem item={repository} singleView={true} />
      )}
    />
  );
};

export default SingleRepository;
