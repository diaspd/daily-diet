import styled, { useTheme } from "styled-components/native";

import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`

export const BackIcon = styled(ArrowLeft).attrs(() => ({
  size: 36,
  color: useTheme().COLORS.GRAY_700,
}))`
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const AvatarContainer = styled.View`
  justify-items: center;
  align-items: center;
  
  width: 55px;
  height: 55px;
  border-color: ${() => useTheme().COLORS.GRAY_700};
  border: 3px;
  border-radius: 100px;
`
export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`