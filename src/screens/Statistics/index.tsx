import { Header } from '@components/Header';
import { Container, HeaderContainer, StatisticsContainer, StatisticsTitle, StatisticsContent, Description, SuccessContainer, FailContainer, LastStatistics } from './styles';
import { Desciption, Title } from '@components/Percentage/styles';

export function Statistics() {
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
          <StatisticsTitle>
            Estatísticas gerais
          </StatisticsTitle>

          <StatisticsContent>
            <Title>
              22
            </Title>

            <Description>
             melhor sequência de pratos dentro da dieta
            </Description>
          </StatisticsContent>

          <StatisticsContent>
            <Title>
              109
            </Title>

            <Description>
            refeições registradas
            </Description>
          </StatisticsContent>

          <LastStatistics>
            <SuccessContainer>
              <Title>
                99
              </Title>

              <Description>
                refeições dentro da dieta
              </Description>
            </SuccessContainer>

            <FailContainer>
              <Title>
                10
              </Title>

              <Description>
                refeições fora da dieta
              </Description>
            </FailContainer>
          </LastStatistics>
      </StatisticsContainer>
    </Container>
  );
}
