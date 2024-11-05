import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

interface EditAniamalScreenProps {
  // route: {
  //   params: {
  //     animal_breed: string;
  //     status: string;
  //     gender: string;
  //     tagId: string;
  //     birthDay: string;
  //   };
  // };
}

const EditAniamalScreen: React.FC<EditAniamalScreenProps> = ({ 
  // route
 }) => {
  // const { animal_breed, status, gender, tagId, birthDay } = route.params;

  // State variables for form inputs
  const [animalBreed, setAnimalBreed] = useState('animal_breed');
  const [status, setStatus] = useState('status');
  const [gender, setGender] = useState('gender');
  const [tagId, setTagId] = useState('tagId');
  const [birthDay, setBirthDay] = useState('birthDay');

  // Save handler function
  const handleSave = () => {
    // For demonstration, we're just showing an alert with the entered values
    Alert.alert("Saved", `Breed: ${animalBreed}\nStatus: ${status}\nGender: ${gender}\nTag ID: ${tagId}\nBirthday: ${birthDay}`);
    // Ideally, you would send these values to your backend or another handler function here
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Animal Details</ThemedText>
      <DetailInput label="Breed" value={animalBreed} onChangeText={setAnimalBreed} />
      <DetailInput label="Status" value={status} onChangeText={setStatus} />
      <DetailInput label="Gender" value={gender} onChangeText={setGender} />
      <DetailInput label="Tag ID" value={tagId} onChangeText={setTagId} />
      <DetailInput label="Birthday" value={birthDay} onChangeText={setBirthDay} />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const DetailInput = ({
  label,
  value,
  onChangeText,
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}) => (
  <View style={styles.card}>
    <Text style={styles.label}>{label}:</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={`Enter ${label}`}
    />
  </View>
);

export default EditAniamalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 12,
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#f9f9f9',
  },
});
