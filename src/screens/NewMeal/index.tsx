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

export function NewMeal() {
  const navigation = useNavigation()
  const [mealName, setMealName] = useState('');
  const [mealDescription, setMealDescription] = useState('');

  const mealId = useId();

  async function handleCreateNewMeal() {
    if (mealName.trim().length === 0 || mealDescription.trim().length === 0) {
      return Alert.alert('Nova Refeição', 'Preencha o nome e a descrição.');
    }

    const newMeal = {
      id: mealId,
      title: mealName,
      description: mealDescription,
      date: new Date().getTime(),
    };

    try {
      await mealCreate(newMeal);
      navigation.navigate('home');
    } catch (error) {
        console.log(error);
        Alert.alert('Criar refeição', 'Não foi possível criar a refeição.');
      }

    navigation.navigate('feedback');
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
            <Input />
          </DateTimeContent>

          <DateTimeContent>
            <Label>Hora</Label>
            <Input />
          </DateTimeContent>
        </DateTimeContainer>


      <OptionContainer>
        <Label>Está dentro da dieta?</Label>
          <OptionContent>
            <SelectButton title='Sim' type='PRIMARY'/>

            <SelectButton title='Não' type='SECONDARY'/>
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
