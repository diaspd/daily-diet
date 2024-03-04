import { Header } from '@components/Header';
import { Container } from './styles';
import { Percentage } from '@components/Percentage';

export function Home() {
  return (
    <Container>
      <Header isLogoVisible isAvatarVisible/>
      
      <Percentage title={'90,00'} />
    </Container>
  );
}
