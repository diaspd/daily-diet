import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealProps, MealType } from '@screens/Home';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { dateFormat } from '@utils/dateFormat';
import { mealsGetAll } from './mealsGetAll';

export async function mealCreate(newMeal: MealType) {
  try {
    const storageData = await mealsGetAll();
    const dataByDate = storageData.find(
      (item) => item.title === dateFormat(newMeal.date, 'date')
    );
    if (dataByDate) {
      dataByDate.data = [...dataByDate.data, newMeal];
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storageData));
    } else {
      const newData: MealProps = {
        title: dateFormat(newMeal.date, 'date'),
        data: [newMeal],
      };
      const updatedData = [...storageData, newData];
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedData));
    }
  } catch (error) {
    throw error;
  }
}