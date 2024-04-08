import { Container, Label } from './styles';

import { DayList } from '@components/DayList';
import { Header } from '@components/Header';
import { Percentage } from '@components/Percentage';
import { Button } from '@components/Button';

import { useNavigation } from "@react-navigation/native";
import { Plus } from 'phosphor-react-native';
import { useTheme } from 'styled-components';

export function Home() {
  const navigation = useNavigation()
  const { COLORS } = useTheme();

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
        icon={<Plus size={18} color={COLORS.WHITE} weight='bold'/>}
        title='Nova refeição'
      />

      <DayList />
      <DayList />
    </Container>
  );
}
