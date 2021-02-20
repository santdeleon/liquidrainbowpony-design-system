import styled from 'styled-components';

const Container = styled.div`
  padding: var(--spacer-size-0-rem) var(--spacer-size-400-rem);
  margin: var(--spacer-size-0-rem) auto;
  @media (min-width: 576px) {
    ${({ fluid }) => !fluid && 'max-width: 540px'}
  }
  @media (min-width: 768px) {
    ${({ fluid }) => !fluid && 'max-width: 720px'}
  }
  @media (min-width: 992px) {
    ${({ fluid }) => !fluid && 'max-width: 960px'}
  }
  @media (min-width: 1200px) {
    ${({ fluid }) => !fluid && 'max-width: 1140px'}
  }
  @media (min-width: 1400px) {
    ${({ fluid }) => !fluid && 'max-width: 1320px'}
  }
`;

export default Container;
