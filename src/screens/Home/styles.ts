import { SafeAreaView } from "react-native";
import styled, { useTheme } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${() => useTheme().COLORS.GRAY_200};
  padding: 24px;
  padding-top: 60px;
`;