import styled from "styled-components";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Method = () => {
  useEffect(() => {
    AOS.init();
  });
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
      <S.TextBox>
        우리는 트롤러들의 흔적을 찾았습니다. <br></br>매치데이터
        분석결과,이긴팀과 진팀은 평균적으로 상대 라인과
        <S.HighLight> 2,900 </S.HighLight>
        골드,
        <S.HighLight> 3.1 </S.HighLight>
        kda <br></br>차이 나는 것을 확인했습니다.
        <br></br>
        따라서 평균적인 값이 나오지 않는 게임들에 트롤이 있다고 확신합니다.
        <br></br>예를 들어 상대라인과 5000골드 차이가 나거나 kda가 6인 게임이
        있다면 트롤러가 있는 판일 수 밖에 없습니다.
      </S.TextBox>
      <S.ChartBox>
        <S.ImageBox>
          <S.Image
            src="/Assets/Images/Black/06kda.png"
            alt="kda차이"
            data-aos="fade-right"
          />
        </S.ImageBox>
        <S.DescBox>
          옆의 그래프를 비교해보면 평균적으로 진팀과 이긴팀은 3.1 정도의
          <br></br> kda값 차이를 보여줍니다.
        </S.DescBox>
      </S.ChartBox>
      <S.ChartBox>
        <S.DescBox>
          옆의 그래프는 이긴팀과 진팀의 골드와 kda값 차이를 보여줍니다.
        </S.DescBox>
        <S.ImageBox>
          <S.Image
            src="/Assets/Images/Black/06differ.png"
            alt="kda차이"
            data-aos="fade-left"
          />
        </S.ImageBox>
      </S.ChartBox>

      <S.ImageBox>
        <Slider {...settings}>
          <div>
            <S.Image src="/Assets/Images/Black/06.png" alt="06" />
          </div>
          <div>
            <S.Image src="/Assets/Images/Black/612.png" alt="612" />
          </div>
          <div>
            <S.Image src="/Assets/Images/Black/1216.png" alt="1216" />
          </div>
          <div>
            <S.Image src="/Assets/Images/Black/1618.png" alt="1618" />
          </div>
          <div>
            <S.Image src="/Assets/Images/Black/1824.png" alt="1824" />
          </div>
        </Slider>
      </S.ImageBox>
      <S.DescBox>
        시간대 별로 구간을 나누어 계산한 결과 <br></br>지금 트롤러들을
        만날확률을 계산했습니다.
      </S.DescBox>
    </S.Wrapper>
  );
};

export default Method;

const Wrapper = styled.div`
  justify-content: space-between;
  height: 300px;
  margin-top: 50px;
  line-height: 1.5;
`;
const ChartBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;
const ImageBox = styled.div``;
const DescBox = styled.div`
  height: 100px;
  text-align: center;
`;

const HighLight = styled.span`
  color: seagreen;
`;

const TextBox = styled.div`
  height: 200px;
  text-align: center;
  margin: auto 0;
  font-size: 16px;
  margin-left: 20px;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
`;
const S = {
  Wrapper,
  ChartBox,
  ImageBox,
  DescBox,
  HighLight,
  TextBox,
  Image,
};
