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
import { useTheme } from 'styled-components/native';
import { Button } from '@components/Button';

import { useNavigation } from "@react-navigation/native";
import { SelectButton } from '@components/SelectButton';

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
        <Label>Nome</Label>
        <Input />

        <Label>Descrição</Label>
        <Input />

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
            style={{marginBottom: 24}}
          />
        </OptionContainer>
      </StatisticsContainer>
    </Container>
  );
}
