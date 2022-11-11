import React, { useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import EmailIcon from "../../../public/icons/email.svg";
import PasswordIcon from "../../../public/icons/password.svg";
import Google from "../../../public/icons/google.svg";
import Input from "../../Input";
import Button from "../../Button";

export const StyledForm = styled.div`
  position: relative;
  display: flex;
  flex: 0 1 50%;
  max-width: 600px;
  padding: 100px 50px;
  margin: 0 auto;
`;

const H1 = styled.h1((props) => ({
  ...props.theme.typography.h1,
  textAlign: "center",
}));

const About = styled.div`
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.cups.earlGrey};
  text-align: center;
`;

const StyledRecovery = styled(Link)`
  margin-bottom: 40px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.butterflypea.veryDark};
`;

const Footer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
`;

const WithGoogle = styled(Button)((props) => ({
  marginTop: "10px",
  backgroundColor: props.theme.colors.cups.white,
  color: props.theme.colors.cups.oolong,
  border: `1px solid ${props.theme.colors.cups.jasmine}`,
}));

const FormSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <StyledForm>
      <div css={{ margin: "auto" }}>
        <div
          css={{
            margin: "auto",
            display: "block",
            width: "42px",
            height: "42px",
            fontSize: "30px",
          }}
        >
          👩‍💻
        </div>
        <H1>Hello again!👋</H1>
        <About>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Cras sit amet sagittis massa, at aliquet augue
        </About>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          id="email"
          icon={<EmailIcon width="16px" height="16px" />}
        />

        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          id="password"
          icon={<PasswordIcon width="16px" height="16px" />}
        />
        <StyledRecovery href="#">Recovery password</StyledRecovery>

        <Button type="submit">Login</Button>

        <WithGoogle disabled>
          <Google width="26px" height="26px" />
          Sign in with Google
        </WithGoogle>
      </div>

      <Footer>
        Don`t have an account yet?{" "}
        <Link
          href="#"
          css={(theme) => ({
            color: theme.colors.butterflypea.dark,
            fontWeight: "700",
          })}
        >
          Sign up
        </Link>
      </Footer>
    </StyledForm>
  );
};

export default FormSection;
