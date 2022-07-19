import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';

import theme from '../../theme';

const styles = StyleSheet.create({
  picker: {
    backgroundColor: theme.colors.white
  }
});

const RepositoryListHeader = ({
  onChangeSearch,
  searchQuery,
  order,
  setOrder
}) => {
  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
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
    </View>
  );
};

export default RepositoryListHeader;
