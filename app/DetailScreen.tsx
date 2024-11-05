import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

interface DetailScreenProps {
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

const DetailScreen: React.FC<DetailScreenProps> = ({ 
  // route
 }) => {
  // const { animal_breed, status, gender, tagId, birthDay } = route.params;

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title} darkColor='darkColor'>Animal Details</ThemedText>
      <DetailCard label="Breed" value={'animal_breed'} />
      <DetailCard label="Status" value={'status'} />
      <DetailCard label="Gender" value={'gender'} />
      <DetailCard label="Tag ID" value={'tagId'} />
      <DetailCard label="Birthday" value={'birthDay'} />
    </View>
  );
};

const DetailCard = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.card}>
    <View style={styles.itemContainer}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  </View>
);

export default DetailScreen;

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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    marginRight: 10,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});
