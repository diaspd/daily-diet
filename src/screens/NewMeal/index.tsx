import { 
    Container, 
    Label, 
    FormTitle, 
    HeaderContent, 
    StatisticsContainer, 
    DateTimeContainer, 
    DateTimeContent, 
    OptionContainer, 
    OptionContent, 
    DescriptionContainer,
    NameContainer
} from './styles';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { useNavigation } from "@react-navigation/native";
import { SelectButton } from '@components/SelectButton';
import { Alert } from 'react-native';
import { useId, useState } from 'react';
import { mealCreate } from '@storage/meal/mealCreate';
import { formatDate } from '@utils/formatDate';

import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';

export function NewMeal() {
  const [mealName, setMealName] = useState('');
  const [mealDescription, setMealDescription] = useState('');
  const [mealOnDiet, setMealOnDiet] = useState<boolean>();
  const [date, setDate] = useState<number>(new Date().getTime());
  
  const mealId = useId();
  const navigation = useNavigation()
  
  function onChange(evt: DateTimePickerEvent, selectedDate?: Date) {
    const formatedDate = selectedDate!.getTime();
    setDate(formatedDate);
  }

  function showDateOrTimePicker(mode: 'date' | 'time') {
    DateTimePickerAndroid.open({
      value: new Date(date),
      onChange,
      mode,
      is24Hour: true,
      display: "spinner",
    });
  }

  async function handleCreateNewMeal() {
    if (mealName.trim().length === 0 || mealDescription.trim().length === 0) {
      return Alert.alert('Nova Refeição', 'Preencha o nome e a descrição.');
    }

    const newMeal = {
      id: mealId,
      title: mealName,
      description: mealDescription,
      date: date,
      isOnDiet: mealOnDiet === true ? true : false,
    };

    try {
      await mealCreate(newMeal);
      navigation.navigate('home');
    } catch (error) {
        console.log(error);
        Alert.alert('Criar refeição', 'Não foi possível criar a refeição.');
      }

    navigation.navigate('feedback', {
      isOnDiet: mealOnDiet ? true : false,
    });
  }

  return (
    <Container>
      <HeaderContent>
        <Header isBackButtonVisible type='TERTIARY'/>

        <FormTitle>
          Nova refeição
        </FormTitle>
      </HeaderContent>
    
      <StatisticsContainer>
        <NameContainer>
          <Label>Nome</Label>
          <Input 
            onChangeText={setMealName}
            value={mealName}
           />
        </NameContainer>

        <Label>Descrição</Label>
        <DescriptionContainer>
          <Input    
            multiline={true}
            textAlignVertical={'top'}
            maxLength={220}
            onChangeText={setMealDescription}
            value={mealDescription}
          />
        </DescriptionContainer>

        <DateTimeContainer>
          <DateTimeContent>
            <Label>Data</Label>
            <Input  
              defaultValue={formatDate(date, 'date')}
              onPressIn={() => showDateOrTimePicker('date')}
            />
          </DateTimeContent>

          <DateTimeContent>
            <Label>Hora</Label>
            <Input 
              onPressIn={() => showDateOrTimePicker('time')}
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
            title='Cadastrar refeição' 
            onPress={handleCreateNewMeal}
            style={{marginBottom: 28}}
          />
        </OptionContainer>
      </StatisticsContainer>
    </Container>
  );
}
