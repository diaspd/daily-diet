import { SafeAreaView } from "react-native";
import styled, { css, useTheme } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${() => useTheme().COLORS.GRAY_300};
  padding-top: 60px;
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
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 45%;
  margin-top: 22px;
  gap: 10px;
  border-radius: 10000px;
`

export const TagStatus = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 10000px;
  background-color: ${() => useTheme().COLORS.GREEN_700};
`

export const TagText = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.MD}px;
    color: ${useTheme().COLORS.GRAY_700};
    font-family: ${useTheme().FONT_FAMILY.REGULAR};
  `}
`