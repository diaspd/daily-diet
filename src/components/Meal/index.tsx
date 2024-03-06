import { Container, HourText, InfoContainer, MealText, Status, Separator } from "./styles";

export function Meal() {
    return (
      <Container>
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