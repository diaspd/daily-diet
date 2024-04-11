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
  width: 43%;
  padding: 0 24px;
`;

export const FormTitle = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.LG}px;
    color: ${useTheme().COLORS.GRAY_700};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
  `}
`

export const StatisticsContainer = styled.View`
  flex: 1;
  border-radius: 20px;
  background-color: ${() => useTheme().COLORS.GRAY_100};
  padding: 0 24px;
  margin-top: 24px;
`

export const Label = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.LG}px;
    color: ${useTheme().COLORS.GRAY_600};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
    margin-top: 30px;
  `}
`

export const DateTimeContainer = styled.View`
  width: 100%;
  height: fit-content;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 28px;
`

export const OptionContainer = styled.View`
  width: 100%;
  flex: 1;
`

export const OptionContent = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 20px;
  flex: 1;
`

export const DateTimeContent = styled.View`
 flex: 1;
`

export const DescriptionContainer = styled.View`
  height: 130px;
`

export const NameContainer = styled.View`
 height: 100px;
`
