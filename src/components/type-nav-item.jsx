import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const StyledNavLink = styled(NavLink)`
  justify-content: center;
  align-items: center;
  width: 134px;
  padding: 0.5rem;
  display: flex;
  gap: 0.75rem;
  text-decoration: none;
  ${typography.text.md};
  color: ${colors.black};
  font-weight: 600;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  &:focus {
    border-bottom: 1px solid ${colors.orange};
  }
  &:visited {
    color: ${colors.black};
  }
`;

function TypeNavItem({ name, to }) {
  return (
    <StyledNavLink
      to={to}
      style={({ isActive }) => {
        if (!isActive) return;
        return {
          borderBottom: "1px solid " + colors.pink[500],
          "&:hover": {
            backgroundColor: colors.pink[400],
          },
          "&:visited": {
            color: colors.white,
          },
        };
      }}
    >
      {name}
    </StyledNavLink>
  );
}

TypeNavItem.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

export default TypeNavItem;
