import { TextInput } from "react-native";

import styled, { useTheme } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;

  background-color: transparent;
  color: ${() => useTheme().COLORS.GRAY_700};

  border: 1px ${() => useTheme().COLORS.GRAY_300};

  font-family: ${() => useTheme().FONT_FAMILY.REGULAR};
  font-size: ${() => useTheme().FONT_SIZE.MD}px;

  border-radius: 6px;
  padding: 16px;
`;