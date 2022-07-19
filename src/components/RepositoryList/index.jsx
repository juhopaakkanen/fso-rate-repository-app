import { FlatList, View, Pressable, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

import useRepositories from '../../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import theme from '../../theme';

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={RepositoryItem}
    />
  );
};

const styles = StyleSheet.create({
  picker: {
    backgroundColor: theme.colors.white
  }
});

const RepositoryList = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState('Latest');

  const { repositories } = useRepositories(order);

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      ListHeaderComponent={() => (
        <Picker
          selectedValue={order}
          onValueChange={(value) => setOrder(value)}
          mode="dropdown"
          style={styles.picker}
        >
          <Picker.Item label="Latest repositories" value="Latest" />
          <Picker.Item label="Highest rated repositories" value="Highest" />
          <Picker.Item label="Lowest rated repositories" value="Lowest" />
        </Picker>
      )}
    />
  );
};

export default RepositoryList;
