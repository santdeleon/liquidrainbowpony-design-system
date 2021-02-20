import styled from 'styled-components';

const H1 = styled.h1`
  font-size: var(--typography-size-900-rem);
  font-weight: ${({ fontWeight }) =>
    fontWeight
      ? `var(--typography-weight-${fontWeight})`
      : 'var(--typography-weight-semibold)'};
  line-height: 'var(--typography-size-900-line-height)';
  margin: ${({ margin }) =>
    margin
      ? margin
      : 'var(--spacer-size-0-rem) var(--spacer-size-0-rem) var(--spacer-size-200-rem) var(--spacer-size-0-rem)'};
  color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-100)'
      : 'var(--color-neutral-900)'};
`;

export default H1;
