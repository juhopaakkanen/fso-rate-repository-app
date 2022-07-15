import { View, Image, StyleSheet, Pressable, Linking } from 'react-native';

import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  item: {
    backgroundColor: theme.colors.white
  },
  topflex: {
    flexDirection: 'row'
  },
  centerflex: {
    marginTop: 5,
    marginRight: 90
  },
  bottomflex: {
    flexDirection: 'row',
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: theme.borderRadius.standard,
    margin: 10
  },
  name: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    marginBottom: 5
  },
  description: {
    color: theme.colors.textSecondary
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5
  },
  stat: {
    marginHorizontal: 8,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
    marginRight: 25
  },
  statName: {
    marginHorizontal: 8,
    textAlign: 'center',
    marginRight: 25,
    color: theme.colors.textSecondary
  },
  button: {
    textAlign: 'center',
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    marginTop: 10,
    marginLeft: 10,
    maxWidth: 335,
    padding: 8,
    borderRadius: 5
  }
});

export const formatCount = (n) => {
  switch (true) {
    case n > 1000:
      return (n / 1000).toFixed(1) + 'k';
    default:
      return n;
  }
};

const RepositoryItem = ({ item, singleView = false }) => {
  return (
    <View testID="repositoryItem" style={styles.item}>
      <View style={styles.topflex}>
        <Image
          source={{ uri: item.ownerAvatarUrl }}
          style={styles.image}
        ></Image>

        <View style={styles.centerflex}>
          <Text style={styles.name}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>

      <View style={styles.bottomflex}>
        <View>
          <Text style={styles.stat}>{formatCount(item.stargazersCount)}</Text>
          <Text style={styles.statName}>Stars</Text>
        </View>
        <View>
          <Text style={styles.stat}>{formatCount(item.forksCount)}</Text>
          <Text style={styles.statName}>Forks</Text>
        </View>
        <View>
          <Text style={styles.stat}>{formatCount(item.reviewCount)}</Text>
          <Text style={styles.statName}>Reviews</Text>
        </View>
        <View>
          <Text style={styles.stat}>{item.ratingAverage}</Text>
          <Text style={styles.statName}>Rating</Text>
        </View>
      </View>
      {singleView && (
        <Pressable onPress={() => Linking.openURL(item.url)}>
          <Text style={styles.button}>Open in GitHub</Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
