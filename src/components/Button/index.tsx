import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";
import { Plus } from "phosphor-react-native";

export type ButtonType = 'default' | 'secondary'

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: JSX.Element;
  variant?: ButtonType
}

export function Button({ title, icon, variant = "default",...rest }: ButtonProps) {
  return (
    <Container 
      variant={variant}
      {...rest}
    >
      {icon}
      <Title variant={variant}>
        {title}
      </Title>
    </Container>
  )
}