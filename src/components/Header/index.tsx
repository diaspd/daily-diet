import { useNavigation } from "@react-navigation/native";

import { Container, BackButton, BackIcon, Logo, AvatarContainer, Avatar } from "./styles";

import logoImg from '@assets/logo.png';
import AvatarImg from '@assets/avatar.png';

import { ButtonIconTypeStyleProps } from "@components/Percentage/styles";

type BackButtonProps = {
  isBackButtonVisible?: boolean;
  isLogoVisible?: boolean;
  isAvatarVisible?: boolean;
  type?: ButtonIconTypeStyleProps;
}

export function Header({ type = 'PRIMARY', isBackButtonVisible = false, isLogoVisible = false, isAvatarVisible = false }: BackButtonProps) {
    const navigation = useNavigation()

    function handleGoBack() {
      navigation.navigate('home');
    }
  
    return (
      <Container>
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