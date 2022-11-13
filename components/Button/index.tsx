import { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
}

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.cups.chamomile};
  border-radius: 4px;
  border: 0;
  background-color: ${(props) =>
    props.isLoading
      ? props.theme.colors.butterflypea.butterflypea
      : props.theme.colors.butterflypea.light};
  &:disabled {
    opacity: 0.6;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  &:hover {
    color: ${(props) => props.theme.colors.cups.white};
    background-color: ${(props) => props.theme.colors.butterflypea.dark};
  }
`;

export default Button;
