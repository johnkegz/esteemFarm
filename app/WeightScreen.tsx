import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

const WeightScreen: React.FC = () => {
  const [animal, setAnimal] = useState('');
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState('');

  // Save handler function
  const handleSave = () => {
    Alert.alert("Weight Entry Saved", `Animal: ${animal}\nWeight: ${weight}\nDate: ${date}`);
    // Insert save logic here, like an API call or data storage
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Weight Entry</ThemedText>
      <InputCard label="Animal" value={animal} onChangeText={setAnimal} placeholder="Enter animal name or ID" />
      <InputCard label="Weight" value={weight} onChangeText={setWeight} placeholder="Enter weight (e.g., kg)" keyboardType="numeric" />
      <InputCard label="Date" value={date} onChangeText={setDate} placeholder="YYYY-MM-DD" />
      <Button title="Save Entry" onPress={handleSave} color="#4CAF50" />
    </View>
  );
};

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

export default WeightScreen;

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
});
