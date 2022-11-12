import { useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const bounce = keyframes`
  0% {
    transform: translate3d(100%, 0, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

const Back = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.butterflypea.light};
  animation: ${bounce} 0.7s ease forwards;
`;

const StyledPopup = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: max-content;
  height: max-content;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(/images/animation.svg) center center/cover;
`;

const usePopup = ({ cb }) => {
  const [isActive, setPopupOpen] = useState(false);
  return {
    setPopupOpen,
    Popup: ({ children }) => {
      if (!isActive) return null;
      setTimeout(() => {
        cb && cb().then(() => setPopupOpen(false));
      }, 5000);
      return (
        <Back>
          <Background />
          <StyledPopup>{children}</StyledPopup>
        </Back>
      );
    },
  };
};

export default usePopup;
