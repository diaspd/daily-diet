import { SafeAreaView } from "react-native";
import styled, { css, useTheme } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${() => useTheme().COLORS.GREEN_300};
`;

export const HeaderContainer = styled.View`
  margin-top: 60px;

  padding: 0 24px;
  background-color: ${() => useTheme().COLORS.GREEN_300};
`

export const PercentageContainer = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.XXL}px;
    color: ${useTheme().COLORS.GRAY_700};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
    text-align: center;
  `}
`

export const PercentageDesciption = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.SM}px;
    color: ${useTheme().COLORS.GRAY_700};
    font-family: ${useTheme().FONT_FAMILY.REGULAR};
    text-align: center;
    margin-top: 6px;
    padding-bottom: 50px;
  `}
`

export const StatisticsContainer = styled.View`
  flex: 1;
  border-radius: 20px;
  background-color: ${() => useTheme().COLORS.GRAY_200};
`