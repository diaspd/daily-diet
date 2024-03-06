import { Meal } from "@components/Meal";
import { Container, Date } from "./styles";

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