import { Container, Illustration, Title, Description } from './styles';

import SuccessImg from '@assets/icons/success.png';
import FailImg from '@assets/icons/fail.png';

import { Button } from '@components/Button';

import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParams = {
  isOnDiet: boolean;
}

export function Feedback() {
  const navigation = useNavigation()
  const route = useRoute()
  
  const { isOnDiet } = route.params as RouteParams;

  function handleGoHome() {
    navigation.navigate('home');
  }
  
  return (
    <Container>   
      {isOnDiet === true ? (
        <Title> Continue assim!</Title>) : (
        <Title style={{color: '#BF3B44'}}>Que pena!</Title>
      )}

      <Description>
        {isOnDiet === true ? 'Você continua' : 'Você'}
        {' '}
        <Description style={{fontWeight: '700'}}>
          {isOnDiet === true ? 'dentro da dieta. ' : 'saiu da dieta '}
        </Description>
          {isOnDiet === true ? 'Muito bem!' : 'dessa vez, mas continue se esforçando e não desista!'}
      </Description>


      <Illustration source={isOnDiet === true ? SuccessImg : FailImg }/>

      <Button 
        onPress={handleGoHome}
        title='Ir para a página inicial' 
      />
      
    </Container>
  );
}
