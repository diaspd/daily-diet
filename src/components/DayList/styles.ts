import styled, { css, useTheme } from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: column;

  margin-top: 32px;
`

export const Date = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.LG}px;
    color: ${useTheme().COLORS.GRAY_700};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
    text-align: start;
  `}
`