import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";
import { Plus } from "phosphor-react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  hasIcon?: boolean;
}

export function Button({ title, hasIcon = false, ...rest}: ButtonProps) {
  return (
    <Container 
      {...rest}
    >
      { hasIcon &&  
          (
            <Plus color="#FAFAFA" size={20}/>
          )
        }
      <Title>
        {title}
      </Title>
    </Container>
  )
}