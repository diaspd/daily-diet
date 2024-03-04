import { Header } from '@components/Header';
import { Container } from './styles';
import { Percentage } from '@components/Percentage';

export function Statistics() {
  return (
    <Container>
      <Header isBackButtonVisible />

      <Percentage title={'90'} />
    </Container>
  );
}
