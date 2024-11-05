import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, FlatList, Alert, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useFetchData } from '@/hooks/useFetchData';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface MilkEntry {
  id: string;
  animal: number;
  value: number;
  date: string;
}

const MilkList: React.FC = () => {
  const [milkEntries, setMilkEntries] = useState<MilkEntry[]>([
    {
      id: `3232323`,
      animal: 1,
      value: 123,
      date: '12/12/12',
    }
  ]);

  const { data: fetchedData, isLoading: fetchDataLoading, isError } = useFetchData('http://127.0.0.1:8000/milk/');

  const navigation = useNavigation();

  const handleAddEntry = () =>{
    navigation.navigate('MilkScreen');
  }

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Milk list</ThemedText>
      <FlatList
        data={fetchedData?.results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MilkCard entry={item} />}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity style={styles.fab} onPress={handleAddEntry}>
        <MaterialIcons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

// Component for input fields
const InputCard = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default"
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
}) => (
  <View style={styles.card}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  </View>
);

// Component for displaying each milk entry as a card
const MilkCard = ({ entry }: { entry: MilkEntry }) => (
  <View style={styles.milkCard}>
    <Text style={styles.milkCardText}><Text style={styles.bold}>Animal:</Text> {entry.animal}</Text>
    <Text style={styles.milkCardText}><Text style={styles.bold}>Milk Value:</Text> {entry.value} L</Text>
    <Text style={styles.milkCardText}><Text style={styles.bold}>Date:</Text> {entry.date}</Text>
  </View>
);

export default MilkList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f6f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4CAF50',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 12,
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  listContainer: {
    paddingTop: 16,
  },
  milkCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 12,
  },
  milkCardText: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#4CAF50',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});
