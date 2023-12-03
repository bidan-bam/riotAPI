import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ChartSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <S.Wrapper>
      <Slider {...settings}>
        <div>
          <S.Image src="/Assets/Images/White/06gold.png" alt="골드차이" />
        </div>
        <div>
          <S.Image src="/Assets/Images/White/06kda.png" alt="kda차이" />
        </div>
      </Slider>
    </S.Wrapper>
  );
};

export default ChartSlide;

const Wrapper = styled.div``;
const Image = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
`;
const S = {
  Wrapper,
  Image,
};
