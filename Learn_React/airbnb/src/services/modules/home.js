import jjRequest from "../request";

export function getHomeGoodPriceData() {
  return jjRequest.get('/home/goodprice')
}