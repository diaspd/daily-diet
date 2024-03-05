import styled, { css, useTheme } from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY' | "TERTIARY";

export type ButtonIconStyleProps = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 112px;
  padding: 16px 24px;

  margin-top: 32px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;

  background-color: ${() => useTheme().COLORS.GREEN_300};
`;

export const StatisticsIcon = styled(ArrowUpRight).attrs<ButtonIconStyleProps>(({ type }) => ({
  size: useTheme().FONT_SIZE.XL,
  color: type === 'PRIMARY' ? useTheme().COLORS.GREEN_700 : type === 'SECONDARY' ? useTheme().COLORS.RED_700 : type === 'TERTIARY' ? useTheme().COLORS.GRAY_700 : undefined,
  fontFamily: useTheme().FONT_FAMILY.BOLD,
}))`
  margin-left: auto;
  margin-right: -12px;
  margin-top: -10px;
`

export const Title = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.XXL}px;
    color: ${useTheme().COLORS.GRAY_700};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
    margin-top: -20px;
    margin-left: 10px;
  `}
`

export const Desciption = styled.Text(() => ({
  color: useTheme().COLORS.GRAY_700,
  fontSize: useTheme().FONT_SIZE.SM,
  fontWeight: useTheme().FONT_FAMILY.REGULAR,
}))
