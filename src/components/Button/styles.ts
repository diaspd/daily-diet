import { TouchableOpacity } from "react-native";

import styled, { useTheme, css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;

  padding: 16px 24px;
  margin-top: 10px;

  background-color: ${() => useTheme().COLORS.GRAY_600};
  border-radius: 6px;
`

export const Title = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.MD}px;
    color: ${useTheme().COLORS.WHITE};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
  `}
`