import { SafeAreaView } from "react-native";
import styled, { css, useTheme } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${() => useTheme().COLORS.GRAY_200};
  padding: 24px;
  padding-top: 60px;
`;

export const Illustration = styled.Image`
  width: 224px;
  height: 288px;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.XL}px;
    color: ${useTheme().COLORS.GREEN_700};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
  `}
`

export const Description = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.LG}px;
    color: ${useTheme().COLORS.GRAY_700};
    font-family: ${useTheme().FONT_FAMILY.REGULAR};
    margin: 12px 0 40px 0;
    text-align: center;
    `}
`
