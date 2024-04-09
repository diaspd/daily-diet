import styled, { useTheme } from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native';
import { ButtonIconStyleProps } from "@components/Percentage/styles";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
`;

export const BackIcon = styled(ArrowLeft).attrs<ButtonIconStyleProps>(({type}: ButtonIconStyleProps) => ({
  size: 36,
  color: type === 'PRIMARY' ? useTheme().COLORS.GREEN_700 : type === 'SECONDARY' ? useTheme().COLORS.RED_700 : type === 'TERTIARY' ? useTheme().COLORS.GRAY_700 : undefined
}))`
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const AvatarContainer = styled.View`
  justify-items: center;
  align-items: center;
  
  width: 45px;
  height: 45px;
  border-color: ${() => useTheme().COLORS.GRAY_600};
  border: 3px;
  border-radius: 100px;
  box-sizing: border-box;
  object-fit: cover;
`
export const Avatar = styled.Image`
  width: 40px;
  height: 39px;
  border-radius: 100px;
`