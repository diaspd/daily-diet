import { MealType } from '@screens/Home';

export function bestStreak(meal: MealType[]) {
  let streak = 0;
  let bestStreak = 0;
  meal.forEach((meal) => {
    if (meal.isOnDiet === true) {
      streak++;
    } else {
      streak = 0;
    }
    if (streak > bestStreak) {
      bestStreak = streak;
    }
  });
  return bestStreak;
}