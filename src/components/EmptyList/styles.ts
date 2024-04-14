import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 120px;
  justify-content: center;
  align-items: center;
`;

export const MessageTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  text-align: center;
  margin-bottom: 5px;
  margin-top: 16px;
`;

export const MessageBody = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  text-align: center;
`;