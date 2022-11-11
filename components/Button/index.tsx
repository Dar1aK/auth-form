import styled from "@emotion/styled";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 16px 24px;
  border-radius: 4px;
  border: 0;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.cups.chamomile};
  background-color: ${(props) => props.theme.colors.butterflypea.light};
  &:disabled {
    opacity: 0.6;
    &:hover {
      background-color: ${(props) => props.theme.colors.cups.jasmine};
      color: ${(props) => props.theme.colors.cups.earlGrey};
    }
  }
  &:hover {
    color: ${(props) => props.theme.colors.cups.white};
    background-color: ${(props) => props.theme.colors.butterflypea.dark};
  }
  &:not(:disabled) {
    cursor: pointer;
  }
`;

export default Button;
