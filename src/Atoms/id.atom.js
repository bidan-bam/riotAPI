import { atom, useRecoilState } from "recoil";

const summonerIdState = atom({
  key: "summonerIdState",
  default: null,
});

export default summonerIdState;
