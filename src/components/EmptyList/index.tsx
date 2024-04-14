import { ForkKnife } from 'phosphor-react-native';
import { Container, MessageBody, MessageTitle } from './styles';

export function EmptyList() {
  return (
    <Container>
      <ForkKnife size={55} />
      <MessageTitle>
        Sua lista está vazia!
      </MessageTitle>

      <MessageBody>
        Que tal adicionar uma refeição?
      </MessageBody>
    </Container>
  );
}