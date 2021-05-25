import * as StonkAPI from "../util/stonk_api_util";

export const RECEIVE_STONK = "RECEIVE_STONK";
export const RECEIVE_STONK_DATA = "RECEIVE_STONK_DATA";
export const RECEIVE_STONK_NEWS = "RECEIVE_STONK_NEWS";

export const receiveStonk = (stonk, symbol) => ({
  type: RECEIVE_STONK,
  stonk,
  symbol,
});

export const receiveStonkData = (data, symbol) => ({
  type: RECEIVE_STONK_DATA,
  data,
  symbol,
});

export const receiveStonkNews = (news, symbol) => ({
  type: RECEIVE_STONK_NEWS,
  news,
  symbol,
});

export const fetchStonk = (symbol) => (dispatch) =>
  StonkAPI.fetchStonk(symbol).then((stonk) =>
    dispatch(receiveStonk(stonk, symbol))
  );

export const fetchStonkInfo = (symbol) => (dispatch) =>
  StonkAPI.fetchStonkInfo(symbol).then((stonk) =>
    dispatch(receiveStonk(stonk, symbol))
  );

export const fetchStonkData = (symbol, start, end) => (dispatch) =>
  StonkAPI.fetchStonkData(symbol, start, end).then((stonk) =>
    dispatch(receiveStonkData(stonk, symbol))
  );

export const fetchStonkNews = (symbol, start, end) => (dispatch) =>
  StonkAPI.fetchStonkNews(symbol, start, end).then((stonk) =>
    dispatch(receiveStonkNews(stonk, symbol))
  );