import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 0 16px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobileLarge}px) {
    padding: 0 8px;
  }
`;

export default Container;
