import { TouchableOpacityProps } from "react-native";
import { Container, HourText, InfoContainer, MealText, Status, Separator } from "./styles";

import { useNavigation } from "@react-navigation/native";

type MealComponentProps = TouchableOpacityProps & {
  title: string;
  time: string;
};

export function MealComponent({ title, time }: MealComponentProps) {
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

          <Status />
        </InfoContainer>
      </Container>  
    )
}