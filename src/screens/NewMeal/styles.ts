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
    margin-top: 50px;
  `}
`

export const DateTimeContainer = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 20px;
`

export const DateTimeContent = styled.View`
 flex: 1;
`

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${() => useTheme().COLORS.GRAY_200};
  min-height: 56px;
  max-height: 56px;
  padding: 16px; 

  border-radius: 8px;
  margin-top: 16px;
  width: 48%;
  
  align-items: baseline;
  justify-content: center;
  gap: 8px;
  padding: 16px;
`

export const OptionText = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.LG}px;
    color: ${useTheme().COLORS.GRAY_700};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
  `}
`

export const Status = styled.View`
  ${() => css`
    height: 12px;
    width: 12px;
    border-radius: 999px;
  `}
`