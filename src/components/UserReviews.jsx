import { FlatList } from 'react-native';

import ReviewItem from './RepositoryList/ReviewItem';
import useSignedUser from '../hooks/useSignedUser';

const UserReviews = () => {
  const { user, loading } = useSignedUser(true);

  if (loading) {
    return null;
  }

  const reviewNodes = user.reviews
    ? user.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} userReviews={true} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default UserReviews;
