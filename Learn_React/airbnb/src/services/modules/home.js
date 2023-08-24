import jjRequest from "../request";

export function getHomeGoodPriceData() {
  return jjRequest.get('/home/goodprice')
}

export function getHomeHighScoreData() {
  return jjRequest.get('/home/highscore')
}

export function getHomeDiscountData() {
  return jjRequest.get('/home/discount')
}

export function getHomeHotRecommendDestData() {
  return jjRequest.get('/home/hotrecommenddest')
}

export function getHomeLongForData() {
  return jjRequest.get('/home/longfor')
}

export function getHomePlusData() {
  return jjRequest.get('/home/plus')
}