import jjRequest from "../request";

export function getHomeGoodPriceData() {
  return jjRequest.get('/home/goodprice')
}

export function getHomeHighScoreData() {
  return jjRequest.get('/home/highscore')
}