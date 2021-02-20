import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonDropdownLink = styled(Link)`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  align-items: ${({ align }) => (align ? align : 'center')};
  padding: ${({ padding }) =>
    padding ? padding : 'var(--spacer-size-400-rem) var(--spacer-size-0-rem)'};
  font-size: var(--typography-size-300-rem);
  font-weight: var(--typography-weight-medium);
  text-decoration: none;
  color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-100)'
      : 'var(--color-neutral-900)'};
  color: ${({ active }) => active && 'var(--color-pink-700)'};
  background-color: ${({ active, theme }) => {
    if (!active) return null;
    else {
      return active && theme.mode === 'dark'
        ? 'var(--color-neutral-1000)'
        : 'var(--color-neutral-100)';
    }
  }};
  &:hover {
    background-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-1000)'
        : 'var(--color-neutral-100)'};
  }
  &:not(:first-child) {
    border-style: solid;
    border-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-1100)'
        : 'var(--color-neutral-200)'};
    border-width: 0.125rem 0 0 0;
  }
  &:first-child {
    border-radius: 0.4rem 0.4rem 0 0;
  }
  &:last-child {
    border-radius: 0 0 0.4rem 0.4rem;
  }
`;

export default ButtonDropdownLink;
