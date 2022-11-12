import Link from "next/link";
import styled from "@emotion/styled";

import AuthForm from "./Form";

export const StyledForm = styled.div`
  position: relative;
  display: flex;
  flex: 0 1 50%;
  max-width: 600px;
  padding: 100px 50px;
  margin: 0 auto;
`;

const Logo = styled.div`
  margin: auto;
  display: block;
  width: 42px;
  height: 42px;
  font-size: 30px;
`;

const H1 = styled.h1((props) => ({
  ...props.theme.typography.h1,
  textAlign: "center",
  [`@media (max-width: ${props.theme.breakpoints.desktop}px)`]: {
    fontSize: "32px",
  },
}));

const About = styled.div`
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.cups.earlGrey};
  text-align: center;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
`;

const FormSection = () => {
  return (
    <StyledForm>
      <div css={{ margin: "auto" }}>
        <Logo>👩‍💻</Logo>
        <H1>Hello again!👋</H1>
        <About>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Cras sit amet sagittis massa, at aliquet augue
        </About>

        <AuthForm />
      </div>

      <Footer>
        Don`t have an account yet?{" "}
        <Link
          href="#"
          css={(theme) => ({
            color: theme.colors.butterflypea.dark,
            fontWeight: "700",
            "&:hover": {
              textDecoration: "underline",
            },
          })}
        >
          Sign up
        </Link>
      </Footer>
    </StyledForm>
  );
};

export default FormSection;
