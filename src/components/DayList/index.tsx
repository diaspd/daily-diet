import { Container, Date } from "./styles";

import { MealComponent } from "@components/MealComponent";

export function DayList() {
    return (
      <Container>
        <Date>
          12.03.24
        </Date>

        <MealComponent /> 
        <MealComponent /> 
        <MealComponent /> 
        <MealComponent /> 
      </Container>
    )
}