import styled from 'styled-components';

const ButtonBase = styled.button`
  cursor: pointer;
  position: relative;
  display: ${({ size }) => (size === 'block' ? 'block' : 'inline-block')};
  padding: ${({ size }) =>
    size === 'lg' ? '0.5rem 1.5rem' : '0.25rem 1.25rem'};
  margin: ${({ margin }) => margin && margin};
  width: ${({ size }) => size && size === 'block' && '100%'};
  font-size: ${({ size }) => {
    if (size === 'sm') return 'var(--typography-size-100-rem)';
    if (!size || size === 'md') return 'var(--typography-size-200-rem)';
    if (size === 'lg' || size === 'block')
      return 'var(--typography-size-400-rem)';
  }};
  font-weight: var(--typography-weight-medium);
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  border-style: solid;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  border-radius: 0.5rem;
  border-width: 0.125rem;
  border-color: var(--color-neutral-200);
  box-shadow: 0 0.125rem 0 0 var(--color-neutral-200);
  overflow: visible;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  transform: translateY(0);
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: 0 0 0 0 var(--color-neutral-200);
    transform: translateY(0.14rem);
  }
  &:disabled {
    opacity: 50%;
    pointer-events: none;
  }
`;

export default ButtonBase;
