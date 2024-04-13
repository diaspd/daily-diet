import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealProps } from '@screens/Home';
import { MEAL_COLLECTION } from '@storage/storageConfig';

export async function mealsGetAll() {
  try {
    const storageData = await AsyncStorage.getItem(MEAL_COLLECTION);
    const data: MealProps[] = storageData ? JSON.parse(storageData) : [];
    return data;
  } catch (error) {
    throw error;
  }
}