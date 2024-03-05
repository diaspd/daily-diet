import { Header } from '@components/Header';
import { Container } from './styles';
import { Percentage } from '@components/Percentage';

export function Statistics() {
  return (
    <Container>
      <Header isBackButtonVisible type='PRIMARY'/>

      <Percentage title={'90,00'} />
    </Container>
  );
}
