import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealType } from '@screens/Home';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { dateFormat } from '@utils/dateFormat';
import { mealsGetAll } from './mealsGetAll';

export async function editMeal(id: string, date: number, updatedMeal: MealType) {
  try {
    const storageData = await mealsGetAll();
    const dataByDate = storageData.find(
      (item) => item.title === dateFormat(date, 'date')
    );
    if (dataByDate) {
      const meal = dataByDate.data.find((item) => item.id === id);
      if (meal) {
        (meal.date = updatedMeal.date),
        (meal.title = updatedMeal.title),
        (meal.description = updatedMeal.description),
        (meal.isOnDiet = updatedMeal.isOnDiet);
      }
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storageData));
    }
  } catch (error) {
    throw error;
  }
}