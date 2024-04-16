import { 
  Container, 
  Label, 
  FormTitle, 
  HeaderContent, 
  StatisticsContainer, 
  DateTimeContainer, 
  DateTimeContent, 
  OptionContainer, 
  OptionContent 
} from './styles';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { useNavigation, useRoute } from "@react-navigation/native";
import { SelectButton } from '@components/SelectButton';
import { DescriptionContainer, NameContainer } from '@screens/NewMeal/styles';
import { MealType } from '@screens/Home';
import { useState } from 'react';
import { formatDate } from '@utils/formatDate';

type RouteParams = {
  meal: MealType
}

export function EditMeal() {
  const route = useRoute()
  const { meal } = route.params as RouteParams;
  
  const [mealName, setMealName] = useState(meal.title);
  const [mealDescription, setMealDescription] = useState(meal.description);
  const [mealOnDiet, setMealOnDiet] = useState(meal.isOnDiet);
  const [date, setDate] = useState<number>(meal.date);

  const navigation = useNavigation()

  function handleGoToFeedback() {
    navigation.navigate('home');
  }

  return (
    <Container>
    <HeaderContent>
      <Header isBackButtonVisible type='TERTIARY'/>

      <FormTitle>
        Editar refeição
      </FormTitle>
    </HeaderContent>
  
    <StatisticsContainer>
        <NameContainer>
          <Label >Nome</Label>
          <Input 
            value={mealName}
            defaultValue={mealName}
          />
        </NameContainer>

        <Label>Descrição</Label>
        <DescriptionContainer>
          <Input    
            multiline={true}
            textAlignVertical={'top'}
            maxLength={220}
            value={mealDescription}
            defaultValue={mealDescription}
          />
        </DescriptionContainer>


      <DateTimeContainer>
        <DateTimeContent>
          <Label>Data</Label>
          <Input 
            defaultValue={formatDate(date, 'date')}
          />
        </DateTimeContent>

        <DateTimeContent>
          <Label>Hora</Label>
          <Input 
            defaultValue={formatDate(date, 'time')}
          />
        </DateTimeContent>
      </DateTimeContainer>


    <OptionContainer>
      <Label>Está dentro da dieta?</Label>
        <OptionContent>
          <SelectButton 
            title='Sim' 
            type='PRIMARY'
            onPress={() => setMealOnDiet(true)}
            isActive={mealOnDiet === true}
          />

          <SelectButton 
            title='Não' 
            type='SECONDARY'
            onPress={() => setMealOnDiet(false)}
            isActive={mealOnDiet === false}
          />
        </OptionContent>

        <Button 
          title='Salvar alterações' 
          onPress={handleGoToFeedback}
          style={{marginBottom: 28}}
        />
      </OptionContainer>
    </StatisticsContainer>
  </Container>
  );
}
