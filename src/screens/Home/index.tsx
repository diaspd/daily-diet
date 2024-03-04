import { Header } from '@components/Header';
import { Container, Button, Title, Label } from './styles';
import { Percentage } from '@components/Percentage';
import { Plus } from 'phosphor-react-native';

export function Home() {
  return (
    <Container>
      <Header isLogoVisible isAvatarVisible/>
      
      <Percentage title={'90,00'} />


      <Label>Refeições</Label>
      
      <Button>
        <Plus color="#FAFAFA" size={20}/>
        <Title>
          Nova refeição
        </Title>
      </Button>
    </Container>
  );
}
