import { DayList } from '@components/DayList';
import { Container, Label } from './styles';

import { Header } from '@components/Header';
import { Percentage } from '@components/Percentage';
import { Button } from '@components/Button';

import { useNavigation } from "@react-navigation/native";
import { Plus } from 'phosphor-react-native';

export function Home() {
  const navigation = useNavigation()

  function handleGoToNewMeal() {
    navigation.navigate('new');
  }

  return (
    <Container>
      <Header isLogoVisible isAvatarVisible />
      
      <Percentage title={'90,00'} />


      <Label>Refeições</Label>
      
      <Button 
        onPress={handleGoToNewMeal}
        hasIcon
        title='Nova refeição'
      />

      <DayList />
      <DayList />
    </Container>
  );
}
