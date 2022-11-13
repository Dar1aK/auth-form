import { InputHTMLAttributes, ReactElement } from "react";
import styled from "@emotion/styled";

type LabelProps = Pick<InputHTMLAttributes<HTMLInputElement>, "value">;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ReactElement;
  error?: string;
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
  margin: 10px 0;
  padding: 14px 16px;
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

const StyledIcon = styled("span")<{ error: boolean }>`
  position: absolute;
  top: 50%;
  right: 10px;
  width: 16px;
  height: 16px;
  transform: translateY(-50%);
  color: ${(props) =>
    props.error ? props.theme.colors.error : props.theme.colors.cups.earlGrey};
  transition: 0.3s color;
  label:focus-within & {
    color: ${(props) => props.theme.colors.butterflypea.light};
  }
`;

export const Input = (props: InputProps) => {
  const { id, value, label, icon, error } = props;
  return (
    <div css={{ position: "relative" }}>
      <label htmlFor={id} css={{ display: "block" }}>
        <StyledLabel value={value}>{label}</StyledLabel>
        <StyledInput type="text" {...props} />
        {icon && <StyledIcon error={!!error}>{icon}</StyledIcon>}
      </label>
    </div>
  );
};

export default Input;
