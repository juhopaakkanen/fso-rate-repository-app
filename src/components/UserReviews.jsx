import { FlatList } from 'react-native';

import ReviewItem from './RepositoryList/ReviewItem';
import useUserReviews from '../hooks/useUserReviews';

const UserReviews = () => {
  const { reviews } = useUserReviews();

  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} userReviews={true} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default UserReviews;
