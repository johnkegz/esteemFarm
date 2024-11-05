import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

const AnimalTreatmentScreen: React.FC = () => {
  const [animal, setAnimal] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSave = () => {
    Alert.alert("Details Saved", `Animal: ${animal}\nDescription: ${description}\nDate: ${date}`);
    // Save logic would go here
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Animal Details</ThemedText>
      <InputCard label="Animal" value={animal} onChangeText={setAnimal} placeholder="Enter animal name or ID" />
      <InputCard label="Description" value={description} onChangeText={setDescription} placeholder="Enter a description" multiline />
      <InputCard label="Date" value={date} onChangeText={setDate} placeholder="YYYY-MM-DD" keyboardType="numeric" />
      <Button title="Save Details" onPress={handleSave} color="#4CAF50" />
    </View>
  );
};

const InputCard = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  multiline = false
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  multiline?: boolean;
}) => (
  <View style={styles.card}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={[styles.input, multiline && styles.textArea]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      multiline={multiline}
    />
  </View>
);

export default AnimalTreatmentScreen;

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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
  textArea: {
    height: 100,
    textAlignVertical: 'top', // Ensures text starts at the top for multiline input
  },
});
