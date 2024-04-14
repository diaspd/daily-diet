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
import { formatDate } from '@utils/formatDate';

import AsyncStorage from '@react-native-async-storage/async-storage';

export type Meal = {
  id: string;
  title: string;
  date: number;
  description: string;
};

export interface MealProps {
  title: string;
  data: Meal[];
}

export function Home() {
  const [meal, setMeal] = useState<MealProps[]>([]);
  const navigation = useNavigation()
  const { COLORS } = useTheme();

  function handleGoToNewMeal() {
    navigation.navigate('new');
  }

  // AsyncStorage.clear();

  // function handleGoToMeal(meal: Meal) {
  //   navigation.navigate('meal', { meal });
  // }

  useFocusEffect(
    useCallback(() => {
      async function fetchMeals() {
        try {
          const storageData = await AsyncStorage.getItem(MEAL_COLLECTION);
          const parsedData = storageData ? JSON.parse(storageData) : [];

          setMeal(parsedData);
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
      
      <Percentage title={'90,00'} />

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
            time={formatDate(meal.date, 'time')}
            // onPress={() => handleGoToMeal(meal)}
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
