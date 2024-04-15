import { SafeAreaView } from "react-native";
import styled, { css, useTheme } from "styled-components/native";

type Props = {
  variant: boolean;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${() => useTheme().COLORS.GRAY_300};
  padding-top: 60px;
  background-color: ${({ theme, variant }) =>
    variant === true
      ? theme.COLORS['GREEN_300']
      : theme.COLORS['RED_300']};
`;

export const HeaderContent = styled.View`
  align-items: center;
  flex-direction: row;
  width: 45%;
  padding: 0 24px;
`;

export const Title = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.XL}px;
    color: ${useTheme().COLORS.GRAY_700};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
  `}
`

export const MealContainer = styled.View`
  flex: 1;
  border-radius: 20px;
  background-color: ${() => useTheme().COLORS.GRAY_100};
  padding: 0 24px;
  margin-top: 24px;
`

export const MealTitle = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.XL}px;
    color: ${useTheme().COLORS.GRAY_600};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
    margin-top: 50px;
  `}
`

export const MealDescription = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.MD}px;
    color: ${useTheme().COLORS.GRAY_500};
    font-family: ${useTheme().FONT_FAMILY.REGULAR};
    margin-top: 10px;
  `}
`

export const DateTimeTitle = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.LG}px;
    color: ${useTheme().COLORS.GRAY_600};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
    margin-top: 24px;
  `}
`

export const Tag = styled.View`
  background-color: ${() => useTheme().COLORS.GRAY_300};
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-left: 15px;
  align-items: center;
  height: 34px;
  width: 45%;
  margin-top: 22px;
  gap: 10px;
  border-radius: 10000px;
`

export const TagStatus = styled.View<Props>`
  height: 10px;
  width: 10px;
  border-radius: 10000px;
  background-color: ${({ theme, variant }) =>
    variant === true
      ? theme.COLORS['GREEN_700']
      : theme.COLORS['RED_700']};
`

export const TagText = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.MD}px;
    color: ${useTheme().COLORS.GRAY_700};
    font-family: ${useTheme().FONT_FAMILY.REGULAR};
  `}
`