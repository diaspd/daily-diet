import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealProps, Meal } from '@screens/Home';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { formatDate } from '@utils/formatDate';
import { mealsGetAll } from './mealsGetAll';

export async function mealCreate(newMeal: Meal) {
  try {
    const storageData = await mealsGetAll();
    const dataByDate = storageData.find(
      (item) => item.title === formatDate(newMeal.date, 'date')
    );
    if (dataByDate) {
      dataByDate.data = [...dataByDate.data, newMeal];
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storageData));
    } else {
      const newData: MealProps = {
        title: formatDate(newMeal.date, 'date'),
        data: [newMeal],
      };
      const updatedData = [...storageData, newData];
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedData));
    }
  } catch (error) {
    throw error;
  }
}