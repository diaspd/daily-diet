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
import { dateFormat } from '@utils/dateFormat';

import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';

export function NewMeal() {
  const [mealName, setMealName] = useState('');
  const [mealDescription, setMealDescription] = useState('');
  const [isMealOnDiet, setIsMealOnDiet] = useState<boolean | null>(null);
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

    if (isMealOnDiet == null) {
      return Alert.alert(
        'Nova Refeição',
        'Selecione se está dentro ou fora da dieta.'
      );
    }

    const newMeal = {
      id: mealId,
      title: mealName,
      description: mealDescription,
      date: date,
      isOnDiet: isMealOnDiet ? true : false,
    };

    try {
      await mealCreate(newMeal);
      navigation.navigate('home');
    } catch (error) {
        console.log(error);
        Alert.alert('Criar refeição', 'Não foi possível criar a refeição.');
      }

    navigation.navigate('feedback', {
      isOnDiet: isMealOnDiet ? true : false,
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
              defaultValue={dateFormat(date, 'date')}
              onPressIn={() => showDateOrTimePicker('date')}
            />
          </DateTimeContent>

          <DateTimeContent>
            <Label>Hora</Label>
            <Input 
              onPressIn={() => showDateOrTimePicker('time')}
              defaultValue={dateFormat(date, 'time')}
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
            title='Cadastrar refeição' 
            onPress={handleCreateNewMeal}
            style={{marginBottom: 28}}
          />
        </OptionContainer>
      </StatisticsContainer>
    </Container>
  );
}
