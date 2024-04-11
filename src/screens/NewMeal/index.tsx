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
import { useTheme } from 'styled-components/native';
import { Button } from '@components/Button';

import { useNavigation } from "@react-navigation/native";
import { SelectButton } from '@components/SelectButton';
import { KeyboardAvoidingView } from 'react-native';

export function NewMeal() {
  const { COLORS } = useTheme();

  const navigation = useNavigation()

  function handleGoToFeedback() {
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
          <Label >Nome</Label>
          <Input />
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
            onPress={handleGoToFeedback}
            style={{marginBottom: 28}}
          />
        </OptionContainer>
      </StatisticsContainer>
    </Container>
  );
}
