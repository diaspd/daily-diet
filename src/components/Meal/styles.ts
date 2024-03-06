import styled, { css, useTheme } from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  align-items: center;
  flex-direction: row;
  margin-top: 8px;

  border: ${() => useTheme().COLORS.GRAY_400} 1px;

  padding: 14px;
  border-radius: 6px;
`

export const InfoContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  flex: 1;
`

export const HourText = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.MD}px;
    color: ${useTheme().COLORS.GRAY_700};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
    padding-right: 12px;
  `}
`

export const Separator = styled.View`
  border: ${() => useTheme().COLORS.GRAY_400} 1px;
  height: 14px;
`

export const MealText = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.LG}px;
    color: ${useTheme().COLORS.GRAY_600};
    padding-left: 12px;
    font-family: ${useTheme().FONT_FAMILY.REGULAR};
  `}
`

export const Status = styled.View`
  align-self: center;
  border-radius: 99999px;
  background-color: ${() => useTheme().COLORS.RED_500};
  width: 14px;
  height: 14px;
`
