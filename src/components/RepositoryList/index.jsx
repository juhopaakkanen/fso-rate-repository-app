import React from 'react';
import { FlatList, View, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

import useRepositories from '../../hooks/useRepositories';
import RepositoryItem from '../RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { order, setOrder, searchQuery, onChangeSearch } = this.props;
    return (
      <RepositoryListHeader
        order={order}
        setOrder={setOrder}
        searchQuery={searchQuery}
        onChangeSearch={onChangeSearch}
      />
    );
  };

  render() {
    const { repositories, navigate, onEndReach } = this.props;

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
        ListHeaderComponent={this.renderHeader}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const RepositoryList = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState('Latest');
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const { repositories, fetchMore } = useRepositories(
    order,
    debouncedSearchQuery
  );

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      navigate={navigate}
      order={order}
      setOrder={setOrder}
      searchQuery={searchQuery}
      onChangeSearch={onChangeSearch}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
