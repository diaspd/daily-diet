import { TouchableOpacityProps } from "react-native";
import { Container, HourText, InfoContainer, MealText, Status, Separator } from "./styles";

import { useNavigation } from "@react-navigation/native";

type MealComponentProps = TouchableOpacityProps & {
  title: string;
  time: string;
  status: boolean;
};

export function MealComponent({ title, time, status}: MealComponentProps) {
    const navigation = useNavigation()

    function handleGoToMeal() {
      navigation.navigate('meal');
    }

    return (
      <Container onPress={handleGoToMeal}>
        <HourText>
          {time}
        </HourText>

        <Separator />

        <InfoContainer>
          <MealText>
            {title}
          </MealText>

          <Status status={status} />
        </InfoContainer>
      </Container>  
    )
}