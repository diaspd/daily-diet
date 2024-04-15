import { useTheme } from "styled-components";
import styled, { css } from "styled-components/native";

export type ButtonDietTypeStyleProps = {
  type: 'PRIMARY' | 'SECONDARY';
  isActive?: boolean;
}

type Props = ButtonDietTypeStyleProps;

export const Container = styled.TouchableOpacity<Props>`
    width: 170px;
    height: 50px;
    min-height: 56px;
    max-height: 56px;
    border-radius: 6px;
    margin-top: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${({ theme, type, isActive }) => css`
      background-color: ${
        isActive ? true && type === 'PRIMARY' 
          ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300 
          : theme.COLORS.GRAY_300
        };
      border: 1px solid ${
        isActive ? true && type === 'PRIMARY' 
          ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700 
          : theme.COLORS.GRAY_300
        };
    `
    };
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_700};
    `};
`

export const Status = styled.View<Props>`
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 10000px;
    background-color: ${({ theme, type }) => type === 'PRIMARY' ?
        theme.COLORS.GREEN_700 : theme.COLORS.RED_700
    };
`