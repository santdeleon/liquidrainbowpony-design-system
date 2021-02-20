import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
  margin: ${({ margin }) =>
    margin ? margin : 'var(--spacer-size-0-rem) var(--spacer-size-350-rem)'};
  font-size: var(--typography-size-300-rem);
  font-weight: var(--typography-weight-medium);
  text-decoration: none;
  color: ${({ active, theme }) => {
    if (active === 'true') return 'var(--color-pink-700)';
    else {
      return theme.mode === 'dark'
        ? 'var(--color-neutral-600)'
        : 'var(--color-neutral-700)';
    }
  }};
  &:hover {
    color: var(--color-pink-700);
  }
`;

export default NavLink;
