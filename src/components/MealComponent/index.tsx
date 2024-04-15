import { TouchableOpacityProps } from "react-native";
import { Container, HourText, InfoContainer, MealText, Status, Separator } from "./styles";

type MealComponentProps = TouchableOpacityProps & {
  title: string;
  time: string;
  status: boolean;
};

export function MealComponent({ title, time, status, ...rest}: MealComponentProps) {
    return (
      <Container {...rest}>
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