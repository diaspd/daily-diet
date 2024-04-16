import { TouchableOpacityProps } from 'react-native';

import { ButtonIconTypeStyleProps, Container, Desciption, StatisticsIcon, Title } from './styles';

export type PercentageProps = TouchableOpacityProps & {
  title: string
  type?: ButtonIconTypeStyleProps;
}

export function Percentage({title, type,...rest }: PercentageProps) {
  if(parseFloat(title) <= parseFloat('50,00')) {
    type="SECONDARY"
  } else {
    type="PRIMARY"
  }

  return (
    <Container {...rest} type={type}>
      <StatisticsIcon weight='bold' type={type} />

      <Title>
        {title}
      </Title>

      <Desciption>
        das refeições dentro da dieta
      </Desciption>
    </Container>
  );
}