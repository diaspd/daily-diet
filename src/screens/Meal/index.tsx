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

import { useNavigation, useRoute } from "@react-navigation/native";
import { PencilLine, Trash } from 'phosphor-react-native';
import { MealType } from '@screens/Home';
import { formatDate } from '@utils/formatDate';

type RouteParams = {
  meal: MealType
}

export function Meal() {
const { COLORS } = useTheme();
const route = useRoute()

const navigation = useNavigation()

const { meal } = route.params as RouteParams;

function handleGoToEditMeal() {
  navigation.navigate('edit')
}

return (
  <Container variant={meal.isOnDiet ? true : false }>
    <HeaderContent>
      <Header isBackButtonVisible type={meal.isOnDiet === true ? 'PRIMARY' : 'SECONDARY'}/>

      <Title>
        Refeição
      </Title>
    </HeaderContent>
  
    <MealContainer>
      <MealTitle>{meal.title}</MealTitle>

      <MealDescription>
        {meal.description}
      </MealDescription>
    
      <DateTimeTitle>Data e hora</DateTimeTitle>

      <MealDescription>
        {formatDate(meal.date, 'date')} 
          {''} às {''}
        {formatDate(meal.date,'time')}
      </MealDescription>

      <Tag>
        <TagStatus variant={meal.isOnDiet ? true : false }/>
        <TagText>
          {meal.isOnDiet ? 'dentro da dieta' : 'fora da dieta'}
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
          style={{marginBottom: 28}}
        />
    </MealContainer>
  </Container>
);
}
