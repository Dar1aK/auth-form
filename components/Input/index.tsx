import React, { InputHTMLAttributes, ReactElement } from "react";
import styled from "@emotion/styled";
import { spawn } from "child_process";

type LabelProps = Pick<InputHTMLAttributes<HTMLInputElement>, "value">;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ReactElement;
}

const StyledLabel = styled("span")<LabelProps>`
  position: absolute;
  top: ${(props) => (props.value ? "0px" : "24px")};
  left: 14px;
  font-size: 13px;
  color: ${(props) => props.theme.colors.cups.earlGrey};
  background: ${(props) => props.theme.colors.cups.white};
  transition: 0.3s top;
  label:focus-within & {
    top: 0px;
  }
`;

const StyledInput = styled("input")`
  width: 100%;
  padding: 14px 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.cups.darjeeling};
  border: 1px solid ${(props) => props.theme.colors.cups.jasmine};
  border-radius: 4px;
  outline: none;
  transition: 0.3s border-color;
  &:focus {
    border-color: ${(props) => props.theme.colors.butterflypea.light};
  }
`;

const StyledIcon = styled("span")`
  position: absolute;
  top: 50%;
  right: 10px;
  width: 16px;
  height: 16px;
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.cups.earlGrey};
  transition: 0.3s color;
  label:focus-within & {
    color: ${(props) => props.theme.colors.butterflypea.light};
  }
`;

export const Input = (props: InputProps) => {
  const { id, value, label, icon } = props;
  return (
    <div css={{ position: "relative" }}>
      <label htmlFor={id} css={{ display: "block" }}>
        <StyledLabel value={value}>{label}</StyledLabel>
        <StyledInput type="text" {...props} />
        {icon && <StyledIcon>{icon}</StyledIcon>}
      </label>
    </div>
  );
};

export default Input;
