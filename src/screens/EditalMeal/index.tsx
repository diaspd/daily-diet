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

import { useNavigation } from "@react-navigation/native";
import { SelectButton } from '@components/SelectButton';
import { DescriptionContainer, NameContainer } from '@screens/NewMeal/styles';

export function EditMeal() {
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
          title='Salvar alterações' 
          onPress={handleGoToFeedback}
          style={{marginBottom: 28}}
        />
      </OptionContainer>
    </StatisticsContainer>
  </Container>
);
}
