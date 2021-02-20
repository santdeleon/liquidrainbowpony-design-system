import styled from 'styled-components';

const PLead = styled.p`
  font-size: var(--typography-size-300-rem);
  font-weight: ${({ fontWeight }) =>
    fontWeight
      ? `var(--typography-weight-${fontWeight})`
      : 'var(--typography-weight-normal)'};
  line-height: ${`var(--typography-size-300-line-height)%`};
  margin: ${({ margin }) =>
    margin
      ? margin
      : 'var(--spacer-size-0-rem) var(--spacer-size-0-rem) var(--spacer-size-200-rem) var(--spacer-size-0-rem)'};
  color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-600)'
      : 'var(--color-neutral-700)'};
`;

export default PLead;
