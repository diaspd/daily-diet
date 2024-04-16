import { SafeAreaView } from "react-native";
import styled, { css, useTheme } from "styled-components/native";

export type HeaderStyleProps = 'PRIMARY' | 'SECONDARY' | "TERTIARY";

export type StyleProps = {
  type: HeaderStyleProps;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const HeaderContainer = styled.View<StyleProps>`
  padding: 0 24px;
  background-color: ${({ type }) => type === 'PRIMARY' ? useTheme().COLORS.GREEN_300 : type === 'SECONDARY' ? useTheme().COLORS.RED_300 : type === 'TERTIARY' ? useTheme().COLORS.GRAY_700 : undefined};
`

export const StatisticsContainer = styled.View`
  flex: 1;
  border-radius: 20px;
  background-color: ${() => useTheme().COLORS.GRAY_200};
  padding: 0 24px;
`

export const StatisticsTitle = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.LG}px;
    color: ${useTheme().COLORS.GRAY_700};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
    text-align: center;
    margin-top: 32px;
    margin-bottom: 8px;
  `}
`

export const StatisticsContent = styled.View`
  width: 100%;
  background-color: ${() => useTheme().COLORS.GRAY_300};
  height: 100px;
  border-radius: 8px;
  margin-top: 16px;
  
  align-items: center;
  justify-content: center;
  gap: 4px;
`

export const Title = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.LG}px;
    color: ${useTheme().COLORS.GRAY_700};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
    text-align: center;
  `}
`

export const Description = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.MD}px;
    color: ${useTheme().COLORS.GRAY_700};
    font-family: ${useTheme().FONT_FAMILY.REGULAR};
    text-align: center;
  `}
`

export const LastStatistics = styled.View`
  flex-direction: row;
  gap: 12px;
  width: 100%;
`

export const SuccessContainer = styled.View`
  background-color: ${() => useTheme().COLORS.GREEN_300};
  height: 120px;
  border-radius: 8px;
  margin-top: 16px;
  width: 48%;
  
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 16px;
`

export const FailContainer = styled.View`
  background-color: ${() => useTheme().COLORS.RED_300};
  height: 120px;
  border-radius: 8px;
  margin-top: 16px;
  width: 48%;

  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 16px;
`