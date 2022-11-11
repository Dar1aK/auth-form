import styled from "@emotion/styled";

import SliderSection from "./SliderSection";
import FormSection from "./FormSection";

export const StyledPage = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLarge}px) {
    flex-direction: column;
  }
`;

const LoginPage = () => {
  return (
    <StyledPage>
      <SliderSection />
      <FormSection />
    </StyledPage>
  );
};

export default LoginPage;
