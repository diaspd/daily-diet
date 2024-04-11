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
import { useState } from 'react';

export function NewMeal() {
  const navigation = useNavigation()
  const [name, setName] = useState('')

  async function handleCreateNewMeal() {
    try {
      if(name.trim().length === 0) {
        return Alert.alert('Nova Refeição', 'Informe o nome da refeição.');
      }
      console.log(name)

      // await mealCreate(name);
      navigation.navigate('feedback');
    } catch (error) {
        Alert.alert('Nova Refeição', 'Não foi possível criar uma nova refeição.');
        console.log(error);
    }
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
          <Input onChangeText={setName}/>
        </NameContainer>

        <Label>Descrição</Label>
        <DescriptionContainer>
          <Input    
            multiline={true}
            textAlignVertical={'top'}
            maxLength={220}
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
