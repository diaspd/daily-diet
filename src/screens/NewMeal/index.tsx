import { Header } from '@components/Header';
import { Container, FormTitle, HeaderContent, StatisticsContainer } from './styles';

export function NewMeal() {
  return (
    <Container>
      <HeaderContent>
        <Header isBackButtonVisible type='TERTIARY'/>

        <FormTitle>
          Nova refeição
        </FormTitle>
      </HeaderContent>
    
      <StatisticsContainer>
        
      </StatisticsContainer>
    </Container>
  );
}
