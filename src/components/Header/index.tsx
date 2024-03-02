import { useNavigation } from "@react-navigation/native";

import { Container, BackButton, BackIcon, Logo, AvatarContainer, Avatar } from "./styles";

import logoImg from '@assets/logo.png';
import AvatarImg from '@assets/avatar.png';

type BackButtonProps = {
  isBackButtonVisible?: boolean;
  isLogoVisible?: boolean;
  isAvatarVisible?: boolean;
}

export function Header({ isBackButtonVisible = false, isLogoVisible = false, isAvatarVisible = false }: BackButtonProps) {
    const navigation = useNavigation()

    function handleGoBack() {
      navigation.navigate('home');
    }
  
    return (
      <Container>
        { isBackButtonVisible &&  
          (
            <BackButton onPress={handleGoBack}>
             <BackIcon />
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