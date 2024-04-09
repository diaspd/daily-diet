import { Container, HourText, InfoContainer, MealText, Status, Separator } from "./styles";

import { useNavigation } from "@react-navigation/native";

export function MealComponent() {
    const navigation = useNavigation()

    function handleGoToMeal() {
      navigation.navigate('meal');
    }

    return (
      <Container onPress={handleGoToMeal}>
        <HourText>
          20:00
        </HourText>

        <Separator />

        <InfoContainer>
          <MealText>
            X-Tudo
          </MealText>

          <Status />
        </InfoContainer>
      </Container>  
    )
}