import { ThemedText } from "@/components/ThemedText";
import { StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

// Define a type for the route parameters
type RootStackParamList = {
  DetailScreen: { itemId: string };
};

// Define the route type
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'DetailScreen'>;

interface DetailScreenProps {
  route: DetailScreenRouteProp;
}

const DetailScreen = ({ route }: DetailScreenProps) => {
  // const { itemId } = route.params;
  return <ThemedText style={styles.itemText}>Here </ThemedText>;
};

export default DetailScreen;

const styles = StyleSheet.create({
  itemText: {
    flex: 1,
    fontSize: 16,
  }
});
