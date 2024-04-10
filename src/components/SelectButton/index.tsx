import { TouchableOpacityProps } from 'react-native';
import  { Title, Status, Container, ButtonDietTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & ButtonDietTypeStyleProps & {
  title: string;
}

export function SelectButton({ title, type, ...rest }: Props) {
  return(
    <Container
      type={type}
      {...rest}
    >
      <Status type={type} />
      <Title>
          {title}
      </Title>
    </Container>
  )
}