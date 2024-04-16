import { Container, BackButton, BackIcon, Logo, AvatarContainer, Avatar } from "./styles";

import { ButtonIconTypeStyleProps } from "@components/Percentage/styles";

import logoImg from '@assets/logo.png';
import AvatarImg from '@assets/icons/avatar.png';

import { useNavigation } from "@react-navigation/native";
import { ViewProps } from "react-native";

type BackButtonProps = ViewProps & {
  isBackButtonVisible?: boolean;
  isLogoVisible?: boolean;
  isAvatarVisible?: boolean;
  type?: ButtonIconTypeStyleProps;
}

export function Header({ type = 'PRIMARY', isBackButtonVisible = false, isLogoVisible = false, isAvatarVisible = false, ...rest }: BackButtonProps) {
    const navigation = useNavigation()

    function handleGoBack() {
      navigation.goBack();
    }
  
    return (
      <Container {...rest}>
        { isBackButtonVisible &&  
          (
            <BackButton onPress={handleGoBack}>
             <BackIcon type={type} size={20}/>
            </BackButton>
          )
        }

        { isLogoVisible &&  
          (
            <Logo source={logoImg} />
          )
        }

        { isAvatarVisible &&  
          (
            <AvatarContainer>
              <Avatar source={AvatarImg}/>
            </AvatarContainer>
          )
        }
      </Container>
    )
}