import { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
}

const Button = styled.button<ButtonProps>`
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
  background-color: ${(props) =>
    props.isLoading
      ? props.theme.colors.butterflypea.butterflypea
      : props.theme.colors.butterflypea.light};
  &:disabled {
    opacity: 0.6;
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
