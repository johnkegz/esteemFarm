import { ThemedText } from '@/components/ThemedText';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, Text } from 'react-native';
import { TextInput, IconButton, Checkbox, Menu } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useFetchData } from '@/hooks/useFetchData';

const ITEMS_PER_PAGE = 10;

interface DataItems {
    id: string;
    title: string;
}

export default function TabOneScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [menuVisible, setMenuVisible] = useState<string | null>(null);
  const [data, setData] = useState<DataItems[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const navigation = useNavigation();

  const { data: fetchedData, isLoading: fetchDataLoading, isError } = useFetchData('http://127.0.0.1:8000/animals/');

  console.log("fetchedData ----------------->", fetchedData?.results || [], fetchDataLoading, isError);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const handleFilterPress = () => {
    console.log('Filter button pressed');
  };

  const toggleItemSelection = (id: string) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  const openMenu = (id: string) => setMenuVisible(id);
  const closeMenu = () => setMenuVisible(null);

  const fetchData = async (page: number) => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    
    // Simulate an API call with new items
    const newItems = Array.from({ length: ITEMS_PER_PAGE }, (_, i) => ({
      id: `${(page - 1) * ITEMS_PER_PAGE + i + 1}`,
      title: `Item ${(page - 1) * ITEMS_PER_PAGE + i + 1}`,
    }));

    setData((prevData) => [...prevData, ...newItems]);
    setIsLoading(false);

    if (newItems.length < ITEMS_PER_PAGE) {
      setHasMore(false); // No more items to load
    }
  };

  const loadMoreItems = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const navigateToDetail = (itemId: string) => {
    navigation.navigate('DetailScreen', { itemId });
  };

  const navigateToEditAnimal = (itemId: string) => {
    navigation.navigate('EditScreen', { itemId });
  };

  const navigateToMilk = (itemId: string) =>{
    navigation.navigate('MilkScreen', { itemId });
  }

  const navigateToList = (itemId: string) =>{
    navigation.navigate('MilkList', { itemId });
  }

  const navigateToTreatmentScreen = (itemId: string) =>{
    navigation.navigate('TreatmentScreen', { itemId });
  }

  const navigateToWeightList = () =>{
    navigation.navigate('WeightList');
  }

  return (
    <View style={styles.container}>
      {/* Search Input Field */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          value={searchQuery}
          onChangeText={onChangeSearch}
          mode="outlined"
          style={styles.searchInput}
          left={<TextInput.Icon icon="magnify" />}
        />
        <IconButton icon="filter-variant" onPress={handleFilterPress} style={styles.filterButton} />
      </View>

      {/* List of Items with Pagination */}
      <FlatList
        data={fetchedData?.results || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Checkbox
              status={selectedItems.includes(item.id) ? 'checked' : 'unchecked'}
              onPress={() => toggleItemSelection(item.id)}
            />
            <ThemedText style={styles.itemText} darkColor='darkColor'>{item.tagId}</ThemedText>
            <ThemedText style={styles.itemText} darkColor='darkColor'>{item.status}</ThemedText>
            <ThemedText style={styles.itemText} darkColor='darkColor'>{item.gender}</ThemedText>
            <ThemedText style={styles.itemText} darkColor='darkColor'>{item.animal_breed}</ThemedText>
            <Menu
              visible={menuVisible === item.id}
              onDismiss={closeMenu}
              anchor={
                <IconButton
                  icon="dots-vertical"
                  onPress={() => openMenu(item.id)}
                  style={styles.menuButton}
                />
              }>
              <Menu.Item onPress={() => navigateToDetail(item.id)} title="View" />
              <Menu.Item onPress={() => navigateToMilk(item.id)} title="Milk" />
              <Menu.Item onPress={() => navigateToList(item.id)} title="Milk List" />
              <Menu.Item onPress={() => navigateToEditAnimal(item.id)} title="Edit" />
              <Menu.Item onPress={() => navigateToTreatmentScreen(item.id)} title="Treatment" />
              <Menu.Item onPress={() => navigateToWeightList(item.id)} title="Weight" />
                
              <Menu.Item onPress={() => console.log('Delete', item.title)} title="Delete" />
            </Menu>
          </View>
        )}
        contentContainerStyle={styles.listContent}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
  },
  filterButton: {
    marginLeft: 8,
  },
  listContent: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 5,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  menuButton: {
    marginLeft: 8,
  },
});
