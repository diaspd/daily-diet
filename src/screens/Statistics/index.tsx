import { Header } from '@components/Header';
import { Container, PercentageDesciption, HeaderContainer, StatisticsContainer } from './styles';
import { PercentageProps } from '@components/Percentage';
import { Desciption, Title } from '@components/Percentage/styles';

export function Statistics({title}: PercentageProps) {
  return (
    <Container>
      <HeaderContainer>
        <Header isBackButtonVisible type='PRIMARY'/>

        <Title>
          90,00%
        </Title>

        <Desciption>
          das refeições dentro da dieta
        </Desciption>
      </HeaderContainer>

      <StatisticsContainer>
      </StatisticsContainer>
    </Container>
  );
}
