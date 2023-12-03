import styled from "styled-components";
import ServerTime from "./Components/serverTime";
import Header from "./Components/header";
import Method from "./Components/method";
import { useEffect, useState } from "react";
import TrollChart from "./Components/trollChart";
const TrollPage = () => {
  const [localTime, setLocalTime] = useState(null);

  useEffect(() => {
    const getLocalTime = () => {
      const date = new Date();
      const localHour = date.getHours();
      setLocalTime(localHour);
    };

    getLocalTime();
  }, []);
  return (
    <S.Background>
      <S.Wrapper>
        <Header></Header>
        <ServerTime localTime={localTime}></ServerTime>
        <TrollChart localTime={localTime}></TrollChart>
        <Method></Method>
      </S.Wrapper>
    </S.Background>
  );
};
export default TrollPage;

const Background = styled.div`
  width: 100%;
  min-height: 400vh;
  background-color: black;
`;
const Wrapper = styled.div`
  width: 70%;
  min-width: 360px;
  max-width: 1200px;

  @media (max-width: 700px) {
    width: 95%;
  }
  @media (max-width: 900px) {
    width: 90%;
  }
  margin: 0 auto;
  padding-top: 10px;
  color: white;
`;

const S = {
  Wrapper,
  Background,
};

// const [summonerId, setSummonerId] = useRecoilState(summonerIdState);
// const [matchData, setMatchData] = useRecoilState(matchDataAtom);
// // const res = getV4.info();

// const TIER = "DIAMOND";
// const DIVISION = "II";
// const QUEQUE = "RANKED_SOLO_5x5";
// const getSummonerInfo = async () => {
//   try {
//     const res = await getV4.info(QUEQUE, TIER, DIVISION, 1);

//     // 여기에 실제 소환사 정보를 어떻게 추출할지에 대한 코드를 작성해야 합니다.
//     console.log(res);
//     const extractedSummonerIds = res.data.map((item) => item.summonerName);

//     setSummonerId(extractedSummonerIds); // Recoil atom에 소환사 IDs 저장
//   } catch (error) {
//     console.error("Error fetching summoner info", error);
//   }
// };
// console.log(summonerId);

// useEffect(() => {
//   // getSummonerInfo();
// }, []);
