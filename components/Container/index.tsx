import styled from "@emotion/styled";

const Container = styled.div`
  padding: 0 16px;
  margin: auto;
  max-width: 1024px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobileLarge}px) {
    padding: 0 8px;
  }
`;

export default Container;
