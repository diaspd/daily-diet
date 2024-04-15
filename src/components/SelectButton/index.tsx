import { TouchableOpacityProps } from 'react-native';
import  { Title, Status, Container, ButtonDietTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & ButtonDietTypeStyleProps & {
  title: string;
  isActive: boolean;
}

export function SelectButton({ title, type, isActive,...rest }: Props) {
  return(
    <Container
      type={type}
      isActive={isActive}
      {...rest}
    >
      <Status type={type} />
      <Title>
          {title}
      </Title>
    </Container>
  )
}