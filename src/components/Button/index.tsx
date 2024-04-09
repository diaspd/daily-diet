import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

export type ButtonType = 'DEFAULT' | 'SECONDARY'

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: JSX.Element;
  variant?: ButtonType
}

export function Button({ title, icon, variant = "DEFAULT",...rest }: ButtonProps) {
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