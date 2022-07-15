import { FlatList, View, StyleSheet, Text } from 'react-native';
import { useParams } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
import useRepository from '../../hooks/useRepository';
import useReviews from '../../hooks/useReviews';

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});

const ReviewItem = ({ review }) => {
  return (
    <View>
      <Text>{review.text}</Text>
    </View>
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

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
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;
