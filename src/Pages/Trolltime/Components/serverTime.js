import styled from "styled-components";

const ServerTime = ({ localTime }) => {
  let percent = 0.0;
  const getTrollPossibility = () => {
    if (localTime >= 0 && localTime < 6) {
      percent = 20.7;
      return "높음";
    } else if (localTime >= 6 && localTime < 12) {
      percent = 17.8;
      return "매우 낮음";
    } else if (localTime >= 12 && localTime < 16) {
      percent = 19.6;
      return "낮음";
    } else if (localTime >= 16 && localTime < 18) {
      percent = 20.5;
      return "높음";
    } else {
      percent = 19.9;
      return "중간";
    }
  };
  const getTrollPossibilityColor = () => {
    switch (getTrollPossibility()) {
      case "높음":
        return "#FF1212";
      case "낮음":
        return "#00A500";
      case "매우 낮음":
        return "#5AAEFF";
      default:
        return "#EAEAEA";
    }
  };

  return (
    <S.Wrapper>
      <S.Description>
        우리는 비이상적인 <br></br>트롤들을 찾습니다.
      </S.Description>
      <S.TrollConfig>
        현재 트롤 출몰 가능성:&nbsp;
        <S.Percent color={getTrollPossibilityColor()}>
          {getTrollPossibility()} ({percent}%)
        </S.Percent>
      </S.TrollConfig>
    </S.Wrapper>
  );
};
export default ServerTime;
const Wrapper = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;
const Description = styled.div`
  width: 414px;
  font-size: 48px;
`;
const TrollConfig = styled.div`
  display: flex;
  font-size: 20px;
  width: 400px;
  border-radius: 20px;
  text-align: center;
`;

const Percent = styled.div`
  color: ${(props) => props.color};
`;
const Time = styled.div`
  font-size: 12px;
`;

const S = {
  Wrapper,
  Description,
  TrollConfig,
  Percent,
  Time,
};
