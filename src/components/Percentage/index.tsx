import { TouchableOpacityProps } from 'react-native';
import { ButtonIconTypeStyleProps, Container, Desciption, StatisticsIcon, Title } from './styles';

import { useNavigation } from "@react-navigation/native";

type PercentageProps = TouchableOpacityProps & {
  title: string
  type?: ButtonIconTypeStyleProps;
}

export function Percentage({title, type,...rest }: PercentageProps) {
  const navigation = useNavigation()

  if(Number(title) <= 50) {
    type="SECONDARY"
  } else {
    type="PRIMARY"
  }

  console.log(title, type)

  function handleGoToStatistics() {
    navigation.navigate('statistics');
  }
  
  return (
    <Container {...rest} onPress={handleGoToStatistics}>
      <StatisticsIcon weight='bold' type={type} />

      <Title>
        {title}%
      </Title>

      <Desciption>
        das refeições dentro da dieta
      </Desciption>
    </Container>
  );
}