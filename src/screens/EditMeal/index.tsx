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
import { dateFormat } from '@utils/dateFormat';
import { Alert } from 'react-native';
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { editMeal } from '@storage/meal/mealEdit';

type RouteParams = {
  meal: MealType
}

export function EditMeal() {
  const route = useRoute()
  const { meal } = route.params as RouteParams;
  
  const [mealName, setMealName] = useState(meal.title);
  const [mealDescription, setMealDescription] = useState(meal.description);
  const [isMealOnDiet, setIsMealOnDiet] = useState(meal.isOnDiet);
  const [date, setDate] = useState<number>(meal.date);

  const navigation = useNavigation()

  function onChange(event: DateTimePickerEvent, selectedDate?: Date) {
    const formatedDate = selectedDate!.getTime();
    setDate(formatedDate);
  }

  function showDateOrTimePicker(mode: 'date' | 'time') {
    DateTimePickerAndroid.open({
      value: new Date(date!),
      onChange,
      mode,
      is24Hour: true,
      display: "spinner",
    });
  }

  async function handleEditMeal() {
    if (mealName.trim().length === 0 || mealDescription.trim().length === 0) {
      return Alert.alert('Edição de Refeição', 'Preencha o nome e a descrição.');
    }

    const updatedMeal = {
      id: meal.id,
      title: mealName,
      description: mealDescription,
      date: date,
      isOnDiet: isMealOnDiet ? true : false,
    };

    try {
      editMeal(meal.id, meal.date, updatedMeal);
      navigation.navigate('meal', { meal: updatedMeal });
    } catch (error) {
      Alert.alert('Editar', 'Não foi possível editar a refeição.');
    }
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
          <Label>Nome</Label>
          <Input 
            value={mealName}
            defaultValue={mealName}
            onChangeText={setMealName}
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
            onChangeText={setMealDescription}
          />
        </DescriptionContainer>


      <DateTimeContainer>
        <DateTimeContent>
          <Label>Data</Label>
          <Input 
            defaultValue={dateFormat(date, 'date')}
            onPressIn={() => showDateOrTimePicker('date')}
          />
        </DateTimeContent>

        <DateTimeContent>
          <Label>Hora</Label>
          <Input 
            defaultValue={dateFormat(date, 'time')}
            onPressIn={() => showDateOrTimePicker('time')}
          />
        </DateTimeContent>
      </DateTimeContainer>


    <OptionContainer>
      <Label>Está dentro da dieta?</Label>
        <OptionContent>
          <SelectButton 
            title='Sim' 
            type='PRIMARY'
            onPress={() => setIsMealOnDiet(true)}
            isActive={isMealOnDiet === true}
          />

          <SelectButton 
            title='Não' 
            type='SECONDARY'
            onPress={() => setIsMealOnDiet(false)}
            isActive={isMealOnDiet === false}
          />
        </OptionContent>

        <Button 
          title='Salvar alterações' 
          onPress={handleEditMeal}
          style={{marginBottom: 28}}
        />
      </OptionContainer>
    </StatisticsContainer>
  </Container>
  );
}
