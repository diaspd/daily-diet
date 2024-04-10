import { useTheme } from "styled-components";
import styled, { css } from "styled-components/native";

export type ButtonDietTypeStyleProps = {
  type: 'PRIMARY' | 'SECONDARY';
}

type Props = ButtonDietTypeStyleProps;

export const Container = styled.TouchableOpacity<Props>`
    width: 160px;
    height: 50px;
    min-height: 56px;
    max-height: 56px;
    border-radius: 6px;
    margin-top: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${() => useTheme().COLORS.GRAY_300};
    ${({ theme, type }) => css`
        background-color: ${type === 'PRIMARY' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
        border: 1px solid ${type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
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