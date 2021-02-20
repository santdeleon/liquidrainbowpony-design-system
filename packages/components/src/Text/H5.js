import styled from 'styled-components';

const H5 = styled.h5`
  font-size: var(--typography-size-500-rem);
  font-weight: ${({ fontWeight }) =>
    fontWeight
      ? `var(--typography-weight-${fontWeight})`
      : 'var(--typography-weight-semibold)'};
  line-height: 'var(--typography-size-500-line-height)';
  margin: ${({ margin }) =>
    margin
      ? margin
      : 'var(--spacer-size-0-rem) var(--spacer-size-0-rem) var(--spacer-size-200-rem) var(--spacer-size-0-rem)'};
  color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-100)'
      : 'var(--color-neutral-900)'};
`;

export default H5;
