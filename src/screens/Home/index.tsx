import { Container, DayListContainer, Label, Date } from './styles';

import { Header } from '@components/Header';
import { Percentage } from '@components/Percentage';
import { Button } from '@components/Button';

import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Plus } from 'phosphor-react-native';
import { useTheme } from 'styled-components';
import { Alert } from 'react-native';
import { mealsGetAll } from '@storage/meal/mealsGetAll';
import { useCallback, useState } from 'react';
import { MealComponent } from '@components/MealComponent';

export function Home() {
  const [meals, setMeals] = useState<string[]>([]);
  const navigation = useNavigation()
  const { COLORS } = useTheme();

  function handleGoToNewMeal() {
    navigation.navigate('new');
  }

  async function fetchMeals() {
    try {
      const data = await mealsGetAll();
      setMeals(data);      
    } catch (error) {
       console.log(error);
       Alert.alert('Turmas', 'Não foi possível carregar as turmas.');
    } 
  }

  useFocusEffect(useCallback(() => {
    fetchMeals();
  },[]));

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

      <DayListContainer>
        <Date>
          12.01.24
        </Date>

        {meals.map((meal) => {
          return <MealComponent key={meal} title={meal} /> 
        })}
      </DayListContainer>
    </Container>
  );
}
