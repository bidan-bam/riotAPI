import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import summonerIdState from "../Atoms/id.atom";

const PATH = "https://kr.api.riotgames.com/lol/";
const TIER = "DIAMOND";
const DIVISION = "II";

const getV4 = {
  info(queue, tier, division, page) {
    return axios.get(PATH + "league/v4/entries/", {
      params: {
        queue,
        tier,
        division,
        page,
        api_key: process.env.REACT_APP_RIOT_API_KEY,
      },
    });
  },
  match() {
    return axios.get(
      PATH +
        `league/v4/entries/RANKED_SOLO_5x5/${TIER}/${DIVISION}?api_key=${process.env.REACT_APP_RIOT_API_KEY}`
    );
  },
  platform(summonerName) {
    return axios.get(PATH + `summoner/v4/summoners/by-name/`, {
      params: {
        summonerName,
        api_key: process.env.REACT_APP_RIOT_API_KEY,
      },
    });
  },
};
export default getV4;
