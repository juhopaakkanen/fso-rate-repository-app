import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';

import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    marginTop: 10
  },
  rightContainer: {
    marginTop: 5,
    marginRight: 90
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
  }
});

const ReviewItem = ({ review, userReviews = false }) => {
  let title;
  userReviews
    ? (title = review.repository.fullName)
    : (title = review.user.username);

  return (
    <View style={styles.topContainer}>
      <Text style={styles.reviewRating}>{review.rating}</Text>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>
          {format(new Date(review.createdAt), 'dd.MM.yyyy')}
        </Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
