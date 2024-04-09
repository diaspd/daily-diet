import { 
  Container, 
  MealTitle, 
  Title, 
  HeaderContent, 
  MealContainer, 
  MealDescription,
  DateTimeTitle,
  Tag,
  TagStatus,
  TagText
} from './styles';

import { Header } from '@components/Header';
import { useTheme } from 'styled-components/native';
import { Button } from '@components/Button';

import { useNavigation } from "@react-navigation/native";
import { PencilLine, Trash } from 'phosphor-react-native';

export function Meal() {
const { COLORS } = useTheme();

const navigation = useNavigation()

function handleGoToEditMeal() {
  navigation.navigate('edit')
}

return (
  <Container>
    <HeaderContent>
      <Header isBackButtonVisible type='TERTIARY'/>

      <Title>
        Refeição
      </Title>
    </HeaderContent>
  
    <MealContainer>
      <MealTitle>Sanduíche</MealTitle>

      <MealDescription>
        Sanduíche de pão integral com atum e salada de alface e tomate
      </MealDescription>
    
      <DateTimeTitle>Data e hora</DateTimeTitle>

      <MealDescription>
        12/08/2022 às 16:00
      </MealDescription>

      <Tag>
        <TagStatus />
        <TagText>
          dentro da dieta
        </TagText>
      </Tag>


        <Button 
          title='Editar refeição' 
          icon={<PencilLine size={24} color={COLORS.GRAY_100}/>}
          style={{ marginTop: 'auto' }}
          onPress={handleGoToEditMeal}
        />

        <Button 
          title='Excluir refeição' 
          icon={<Trash />}
          variant='SECONDARY'
          style={{marginBottom: 24}}
        />
    </MealContainer>
  </Container>
);
}
