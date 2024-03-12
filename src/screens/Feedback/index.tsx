import { Container, Illustration, Title, Description } from './styles';

import SuccessImg from '@assets/success.png';
import FailImg from '@assets/fail.png';

import { Button } from '@components/Button';

import { useNavigation } from "@react-navigation/native";

export function Feedback() {
  const navigation = useNavigation()

  function handleGoHome() {
    navigation.navigate('home');
  }

  return (
    <Container>
        
      <Title>Continue assim!</Title>

      <Description>
        Você continua  
          {' '}
          <Description style={{fontWeight: '700'}}>
             dentro da dieta. 
          </Description>
          {' '}
        Muito bem!
      </Description>


      <Illustration source={SuccessImg}/>

      <Button 
        onPress={handleGoHome}
        title='Ir para a página inicial' 
      />
      
    </Container>
  );
}
