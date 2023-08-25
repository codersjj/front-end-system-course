import jjRequest from "../request";

export function getEntireList(offset = 0, size = 20) {
  return jjRequest.get('/entire/list', {
    params: {
      offset,
      size
    }
  })
}