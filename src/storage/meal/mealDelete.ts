import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { dateFormat } from '@utils/dateFormat';
import { mealsGetAll } from './mealsGetAll';

export async function mealDelete(id: string, date: number) {
  try {
    const storageData = await mealsGetAll();
    const dataByDate = storageData.find(
      (item) => item.title === dateFormat(date, 'date')
    );

    if (dataByDate) {
      const filteredMeals = dataByDate.data.filter((meal) => meal.id !== id);
      dataByDate.data = filteredMeals;
      const updatedStorageDataWhenNoMeals = storageData.filter(
        (item) => item.title !== dataByDate.title
      );

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify(
        filteredMeals.length === 0
          ? updatedStorageDataWhenNoMeals
          : storageData
      )
    );
    }
  } catch (error) {
    throw error;
  }
}