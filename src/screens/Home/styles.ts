import { SafeAreaView, TouchableOpacity } from "react-native";
import styled, { css, useTheme } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${() => useTheme().COLORS.GRAY_200};
  padding: 24px;
  padding-top: 60px;
`;

export const Label = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.MD}px;
    color: ${useTheme().COLORS.GRAY_700};
    font-family: ${useTheme().FONT_FAMILY.REGULAR};
    margin-top: 50px;
  `}
`

export const Button = styled(TouchableOpacity)`
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;

  padding: 16px 24px;
  margin-top: 10px;

  background-color: ${() => useTheme().COLORS.GRAY_600};
  border-radius: 6px;
`;

export const Title = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.SM}px;
    color: ${useTheme().COLORS.WHITE};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
  `}
`