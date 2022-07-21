import { FlatList, Alert } from 'react-native';
import { useNavigate } from 'react-router-native';

import ReviewItem from './RepositoryList/ReviewItem';
import useSignedUser from '../hooks/useSignedUser';
import useDeleteReview from '../hooks/useDeleteReview';

const UserReviews = () => {
  const { user, refetch } = useSignedUser(true);
  const [deleteReview] = useDeleteReview();
  const navigate = useNavigate();

  const reviewNodes = user?.reviews
    ? user.reviews.edges.map((edge) => edge.node)
    : [];

  const onDeletePress = async (id) => {
    const onConfirmedDelete = async (id) => {
      await deleteReview(id);
      refetch();
    };
    Alert.alert('Delete review', 'Are you sure you want to delete review', [
      {
        text: 'CANCEL',
        style: 'cancel'
      },
      { text: 'DELETE', onPress: () => onConfirmedDelete(id) }
    ]);
  };

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => (
        <ReviewItem
          review={item}
          onDeletePress={onDeletePress}
          onRepositoryPress={navigate}
        />
      )}
      keyExtractor={({ id }) => id}
    />
  );
};

export default UserReviews;
