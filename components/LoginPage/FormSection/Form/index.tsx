import { useState } from "react";
import Link from "next/link";
import Router from "next/router";

import styled from "@emotion/styled";

import EmailIcon from "../../../../public/icons/email.svg";
import PasswordIcon from "../../../../public/icons/password.svg";
import EyeIcon from "../../../../public/icons/eye.svg";
import Google from "../../../../public/icons/google.svg";
import Loader from "../../../../public/icons/loader.svg";
import Confirm from "../../../../public/icons/confirm.svg";

import Input from "../../../Input";
import Button from "../../../Button";
import usePopup from "../../../usePopup";
import { getAuth } from "../../../../API";

export const StyledForm = styled.div`
  position: relative;
  display: flex;
  flex: 0 1 50%;
  max-width: 600px;
  padding: 100px 50px;
  margin: 0 auto;
`;

const StyledRecovery = styled(Link)`
  display: inline-block;
  margin-bottom: 40px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.butterflypea.veryDark};
  &:hover {
    text-decoration: underline;
  }
`;

const WithGoogle = styled(Button)((props) => ({
  marginTop: "10px",
  backgroundColor: props.theme.colors.cups.white,
  color: props.theme.colors.cups.oolong,
  border: `1px solid ${props.theme.colors.cups.jasmine}`,
}));

const Error = styled.span((props) => ({
  color: props.theme.colors.error,
  fontSize: "12px",
}));

const H1 = styled.h1((props) => ({
  ...props.theme.typography.h1,
  color: props.theme.colors.cups.white,
}));

const PASSWORD_REGEX = /[a-zA-Z0-9]{6,}/g;
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [inputType, setInputType] = useState<"password" | "text">("password");
  const { Popup, setPopupOpen } = usePopup({ cb: () => Router.push("/") });

  const onSubmitAuth = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email) {
      setLoading(false);
      return setError("Email is required");
    }

    if (!password) {
      setLoading(false);
      return setError("Password is required");
    }

    if (!EMAIL_REGEX.test(email)) {
      setLoading(false);
      return setError("Email doesn't look like email");
    }
    if (!PASSWORD_REGEX.test(password)) {
      setLoading(false);
      return setError("Password must be at least 6 characters");
    }

    getAuth({ email: email.trim(), password: password.trim() }).then((res) => {
      if (res.error) {
        setLoading(false);
        return setError(res.errorText);
      }
      if (res.success) {
        onSuccess();
      }
    });
  };

  const onSuccess = () => {
    setLoading(false);
    setPopupOpen(true);
  };

  return (
    <div>
      <form onSubmit={onSubmitAuth}>
        {error && <Error>{error}</Error>}

        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          label="Email"
          id="email"
          icon={<EmailIcon width="16px" height="16px" />}
          error={error}
        />

        <Input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          onBlur={() => setInputType("password")}
          label="Password"
          id="password"
          icon={
            inputType === "password" ? (
              <EyeIcon
                width="18px"
                height="18px"
                onClick={() => setInputType("text")}
                css={{ cursor: "pointer" }}
              />
            ) : (
              <PasswordIcon
                width="16px"
                height="16px"
                onClick={() => setInputType("password")}
                css={{ cursor: "pointer" }}
              />
            )
          }
          type={inputType}
          error={error}
        />
        <StyledRecovery href="#" tabIndex={-1}>
          Recovery password
        </StyledRecovery>

        <Button type="submit" isLoading={isLoading} disabled={isLoading}>
          {isLoading && (
            <Loader width="22px" height="22px" css={{ marginRight: "8px" }} />
          )}
          Login
        </Button>

        <WithGoogle disabled isLoading={isLoading}>
          <Google width="26px" height="26px" />
          Sign in with Google
        </WithGoogle>
      </form>

      <Popup>
        <div css={{ textAlign: "center" }}>
          <Confirm width="56px" height="56px" />
          <H1>Confirmed!</H1>
        </div>
      </Popup>
    </div>
  );
};

export default Form;
