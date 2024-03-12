import { Container, Date } from "./styles";

import { Meal } from "@components/Meal";

export function DayList() {
    return (
      <Container>
        <Date>
          12.03.24
        </Date>

        <Meal /> 
        <Meal /> 
        <Meal /> 
        <Meal /> 
      </Container>
    )
}