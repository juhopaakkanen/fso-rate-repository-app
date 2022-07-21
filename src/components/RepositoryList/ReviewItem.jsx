import { View, StyleSheet, Pressable, Alert } from 'react-native';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-native';

import theme from '../../theme';
import Text from '../Text';
import useDeleteReview from '../../hooks/useDeleteReview';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    marginTop: 10
  },
  topContainer: {
    flexDirection: 'row'
  },
  centerContainer: {
    marginTop: 5,
    marginRight: 90
  },
  bottomContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  },
  reviewRating: {
    textAlign: 'center',
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    padding: 10,
    margin: 10
  },
  title: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    marginTop: 5
  },
  date: {
    color: theme.colors.textSecondary,
    marginBottom: 5
  },
  buttonBlue: {
    textAlign: 'center',
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    marginTop: 10,
    marginLeft: 10,
    width: 150,
    padding: 15,
    borderRadius: 5,
    marginBottom: 15
  },
  buttonRed: {
    textAlign: 'center',
    backgroundColor: theme.colors.red,
    color: theme.colors.white,
    marginTop: 10,
    marginLeft: 10,
    width: 150,
    padding: 15,
    borderRadius: 5,
    marginBottom: 15
  }
});

const ReviewItem = ({ review, userReviews = false, refetch = false }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();

  const onConfirmedDelete = async () => {
    await deleteReview(review.id);
    refetch();
  };

  const onDeletePress = async () => {
    Alert.alert('Delete review', 'Are you sure you want to delete review', [
      {
        text: 'CANCEL',
        style: 'cancel'
      },
      { text: 'DELETE', onPress: onConfirmedDelete }
    ]);
  };

  let title;
  userReviews
    ? (title = review.repository.fullName)
    : (title = review.user.username);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.reviewRating}>{review.rating}</Text>
        <View style={styles.centerContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>
            {format(new Date(review.createdAt), 'dd.MM.yyyy')}
          </Text>
          <Text>{review.text}</Text>
        </View>
      </View>
      {userReviews && (
        <View style={styles.bottomContainer}>
          <Pressable onPress={() => navigate(`/${review.repository.id}`)}>
            <Text style={styles.buttonBlue}>View repository</Text>
          </Pressable>
          <Pressable onPress={onDeletePress}>
            <Text style={styles.buttonRed}>Delete review</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
