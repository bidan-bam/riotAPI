import styled from "styled-components";
import ChartSlide from "./chartSlide";

const TrollChart = ({ localTime }) => {
  return (
    <S.Wrapper>
      <S.LeftBox>
        트롤러들 만날 확률은 <br></br> <S.HighLight>골드 차이</S.HighLight>와{" "}
        <S.HighLight>KDA 차이 </S.HighLight>를근거로합니다.
      </S.LeftBox>
      <S.RightBox>
        <ChartSlide />
      </S.RightBox>
    </S.Wrapper>
  );
};

export default TrollChart;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 300px;
  text-align: center;
  align-items: center;
  margin-top: 30px;
`;

const LeftBox = styled.div`
  text-align: center;
  align-items: center;
  height: 100px;
  width: 380px;
  font-size: 32px;
  margin-left: 20px;
`;
const HighLight = styled.span`
  font-weight: bold;
  color: #ffff95;
`;
const RightBox = styled.div`
  width: 500px;
  height: 250px;
`;

const S = {
  Wrapper,
  LeftBox,
  HighLight,
  RightBox,
};
