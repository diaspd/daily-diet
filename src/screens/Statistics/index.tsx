import { Container, HeaderContainer, StatisticsContainer, StatisticsTitle, StatisticsContent, Description, SuccessContainer, FailContainer, LastStatistics, HeaderStyleProps } from './styles';

import { Header } from '@components/Header';
import { Desciption, Title } from '@components/Percentage/styles';
import { MealProps } from '@screens/Home';
import { mealsGetAll } from '@storage/meal/mealsGetAll';
import { useCallback, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import { bestStreak } from '@utils/bestStreak';
import { percentageFormat } from '@utils/percentageFormat';

export function Statistics(type: HeaderStyleProps) {
  const [data, setData] = useState<MealProps[]>([]);

  async function fetchStatistics() {
    try{
      const fetchData = await mealsGetAll();
      setData(fetchData);
    }
    catch(error){
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
      fetchStatistics();
  }, []))

  const meals = data.map((meal) => meal.data).flat();

  const bestStreakOnDiet = bestStreak(meals);

  const totalMeals = meals.length;
  const totalMealsOnDiet = meals.filter((meal) => meal.isOnDiet).length;
  const totalMealsOutDiet = meals.length - totalMealsOnDiet;

  const formattedPercentageInDiet = percentageFormat(
    totalMealsOnDiet,
    totalMeals
  );

  if(parseFloat(totalMeals > 0 ? formattedPercentageInDiet : '0,00%') <= parseFloat('50,00')) {
    type="SECONDARY"
  } else {
    type="PRIMARY"
  }

  return (
    <Container>
      <HeaderContainer type={type}>
        <Header isBackButtonVisible type={type} style={{ marginTop: 50}}/>

        <Title>
          {totalMeals > 0 ? formattedPercentageInDiet : '0,00%'}
        </Title>

        <Desciption>
          das refeições dentro da dieta
        </Desciption>
      </HeaderContainer>

      <StatisticsContainer>
          <StatisticsTitle>
            Estatísticas gerais
          </StatisticsTitle>

          <StatisticsContent>
            <Title>
              {bestStreakOnDiet}
            </Title>

            <Description>
             melhor sequência de pratos dentro da dieta
            </Description>
          </StatisticsContent>

          <StatisticsContent>
            <Title>
              {totalMeals}
            </Title>

            <Description>
            refeições registradas
            </Description>
          </StatisticsContent>

          <LastStatistics>
            <SuccessContainer>
              <Title>
                {totalMealsOnDiet}
              </Title>

              <Description>
                refeições dentro da dieta
              </Description>
            </SuccessContainer>

            <FailContainer>
              <Title>
                {totalMealsOutDiet}
              </Title>

              <Description>
                refeições fora da dieta
              </Description>
            </FailContainer>
          </LastStatistics>
      </StatisticsContainer>
    </Container>
  );
}
