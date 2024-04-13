import { ForkKnife } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { Container, Message } from './styles';

export function EmptyList() {
  return (
    <Container>
      <ForkKnife size={55} />
      <Message>
        Sua lista está vazia!{'\n'} Que tal adicionar uma refeição?
      </Message>
    </Container>
  );
}