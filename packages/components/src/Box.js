import styled from 'styled-components';

const Box = styled.div`
  background-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-900)'
      : 'var(--color-neutral-0)'};
  border-width: 0.125rem 0.125rem 0.25rem;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-200)'};
  border-radius: 0.5rem;
  padding: ${({ padding }) =>
    padding ? padding : 'var(--spacer-size-400-rem)'};
  margin: ${({ margin }) => margin && margin};
  width: ${({ width }) => width && width};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
`;

export default Box;
