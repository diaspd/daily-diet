import { Header } from '@components/Header';
import { Container, Label, FormTitle, HeaderContent, StatisticsContainer, DateTimeContainer, DateTimeContent } from './styles';
import { Input } from '@components/Input';

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
        <Label>Nome</Label>
        <Input />

        <Label>Descrição</Label>
        <Input style={{height: 90}} />

        <DateTimeContainer>
          <DateTimeContent>
            <Label>Data</Label>
            <Input />
          </DateTimeContent>

          <DateTimeContent>
            <Label>Hora</Label>
            <Input />
          </DateTimeContent>
        </DateTimeContainer>

        <Label>Está dentro da dieta</Label>
      </StatisticsContainer>
    </Container>
  );
}
