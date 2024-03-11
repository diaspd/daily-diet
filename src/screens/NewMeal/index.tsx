import { Header } from '@components/Header';
import { Container, Label, FormTitle, HeaderContent, StatisticsContainer, DateTimeContainer, DateTimeContent, Option, OptionText, Status } from './styles';
import { Input } from '@components/Input';
import { useTheme } from 'styled-components/native';

export function NewMeal() {
  const { COLORS } = useTheme()

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

        <Label>Está dentro da dieta?</Label>

        <DateTimeContainer>
          <Option>
            <Status style={{backgroundColor: COLORS.GREEN_700}}/>
            <OptionText>
              Sim
            </OptionText>
          </Option>

          <Option>
            <Status style={{backgroundColor: COLORS.RED_700}}/>
            <OptionText>
              Não
            </OptionText>
          </Option>
        </DateTimeContainer>

      </StatisticsContainer>
    </Container>
  );
}
