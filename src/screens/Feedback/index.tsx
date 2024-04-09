import { Container, Illustration, Title, Description } from './styles';

import SuccessImg from '@assets/icons/success.png';
import FailImg from '@assets/icons/fail.png';

import { Button } from '@components/Button';

import { useNavigation } from "@react-navigation/native";

export function Feedback() {
  const navigation = useNavigation()

  function handleGoHome() {
    navigation.navigate('home');
  }

  const isOnDiet = 40

  return (
    <Container>   
      {isOnDiet >= 50 ? (
        <Title> Continue assim!</Title>) : (
        <Title style={{color: '#BF3B44'}}>Que pena!</Title>
      )}

      <Description>
        {isOnDiet >= 50 ? 'Você continua' : 'Você'}
        {' '}
        <Description style={{fontWeight: '700'}}>
          {isOnDiet >= 50 ? 'dentro da dieta. ' : 'saiu da dieta '}
        </Description>
          {isOnDiet >= 50 ? 'Muito bem!' : 'dessa vez, mas continue se esforçando e não desista!'}
      </Description>


      <Illustration source={isOnDiet >= 50 ? SuccessImg : FailImg }/>

      <Button 
        onPress={handleGoHome}
        title='Ir para a página inicial' 
      />
      
    </Container>
  );
}
