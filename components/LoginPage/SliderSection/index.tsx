import Image from "next/image";
import styled from "@emotion/styled";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export const StyledSection = styled.div`
  position: relative;
  flex: 0 1 50%;
  max-width: 50%;
  background: ${(props) => props.theme.colors.butterflypea.light};
  border-radius: 0 6px 6px 0;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLarge}px) {
    max-width: 100%;
  }
`;

export const StyledSlide = styled(SwiperSlide)`
  padding: 50px;
  color: ${(props) => props.theme.colors.cups.white};
`;

export const StyledImage = styled(Image)`
  display: block;
  margin: auto;
  @media (max-width: ${(props) => props.theme.breakpoints.desktopLarge}px) {
    width: 500px;
    height: 500px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLarge}px) {
    width: 260px;
    height: 260px;
  }
`;

const H2 = styled.h1((props) => ({
  ...props.theme.typography.h2,
  color: props.theme.colors.cups.white,
  [`@media (max-width: ${props.theme.breakpoints.desktop}px)`]: {
    fontSize: "26px",
  },
}));

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(/images/animation.svg) top center/cover;
`;

const SliderSection = () => {
  return (
    <StyledSection>
      <Background />
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={100}
        slidesPerView={1}
        centeredSlides
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        <StyledSlide>
          <div>
            <StyledImage
              src="/images/slider_1.svg"
              alt="Friends"
              width={750}
              height={730}
            />
            <div css={{ margin: "auto", textAlign: "center" }}>
              <H2>
                New Sheduling
                <br /> and routing options
              </H2>
              <div>
                We also updated the&nbsp;format
                <br /> of&nbsp;podcasts and rewards.
              </div>
            </div>
          </div>
        </StyledSlide>
        <StyledSlide>
          <div>
            <StyledImage
              src="/images/slider_2.svg"
              alt="Friends2"
              width={750}
              height={730}
            />
            <div css={{ margin: "auto", textAlign: "center" }}>
              <H2>
                Change the&nbsp;quality
                <br /> of&nbsp;your life
              </H2>
              <div>
                Balansed diet and smart stats will
                <br /> fill your life with happiness and joy.
              </div>
            </div>
          </div>
        </StyledSlide>
      </Swiper>
    </StyledSection>
  );
};

export default SliderSection;
