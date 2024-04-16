import { useCallback, useState } from 'react';

import { Plus } from 'phosphor-react-native';
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Container, DateTitle, Label} from './styles';

import { Header } from '@components/Header';
import { Percentage } from '@components/Percentage';
import { Button } from '@components/Button';

import { useTheme } from 'styled-components';
import { Alert, SectionList } from 'react-native';
import { MealComponent } from '@components/MealComponent';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { EmptyList } from '@components/EmptyList';
import { dateFormat } from '@utils/dateFormat';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { percentageFormat } from '@utils/percentageFormat';

export type MealType= {
  id: string;
  title: string;
  date: number;
  description: string;
  isOnDiet: boolean;
};

export interface MealProps {
  title: string;
  data: MealType[];
}

export function Home() {
  const [meal, setMeal] = useState<MealProps[]>([]);
  const navigation = useNavigation()
  const { COLORS } = useTheme();

  const meals = meal.map((meal) => meal.data).flat();

  const totalMealsInDiet = meals.filter((meal) => meal.isOnDiet).length;
  const totalMeals = meals.length;

  const formattedPercentageInDiet = percentageFormat(
    totalMealsInDiet,
    totalMeals
  );

  function handleGoToStatistics() {
    navigation.navigate('statistics');
  }

  function handleGoToNewMeal() {
    navigation.navigate('new');
  }
  
  function handleGoToMeal(meal: MealType) {
    navigation.navigate('meal', { meal });
  }
  
  // AsyncStorage.clear();

  useFocusEffect(
    useCallback(() => {
      async function fetchMeals() {
        try {
          const storageData = await AsyncStorage.getItem(MEAL_COLLECTION);
          const parsedData = storageData ? JSON.parse(storageData) : [];

          const formattedData = parsedData.reverse()
          setMeal(formattedData);
        } catch (error) {
            console.log(error);
            Alert.alert('Dados', 'Não foi possível recuperar os dados.');
          }
      }
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <Header isLogoVisible isAvatarVisible />
      
      <Percentage 
        title={totalMeals > 0 ? formattedPercentageInDiet : '0,00%'} 
        onPress={handleGoToStatistics}
      />

      <Label>Refeições</Label>
      
      <Button 
        onPress={handleGoToNewMeal}
        icon={<Plus size={18} color={COLORS.WHITE} weight='bold'/>}
        title='Nova refeição'
      />

      <SectionList
        sections={meal}
        keyExtractor={(meal, index) => meal.title + index}
        renderItem={({ item: meal }) => (
          <MealComponent
            title={meal.title}
            time={dateFormat(meal.date, 'time')}
            status={meal.isOnDiet ? true : false}
            onPress={() => handleGoToMeal(meal)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <DateTitle>{title.replace(/\//g, ".")}</DateTitle>
        )}
        fadingEdgeLength={200}
        ListEmptyComponent={
          <EmptyList />
        }
        showsVerticalScrollIndicator={false}
      />
      
    </Container>
  );
}
