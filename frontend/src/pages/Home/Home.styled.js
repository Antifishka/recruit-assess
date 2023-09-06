import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../globalStyles/theme";

export const StyledLink = styled(NavLink)`
    color: ${theme.colors.background};
    text-decoration: underline;

    :hover,
    :focus{
        color: ${theme.colors.accent};
    }
`;
