import Axios from "axios";
import Qs from "qs";

class Http {
  request(params) {
    return new Promise(resolve => {
      Axios({
        method: params.type || "get",
        url: params.url,
        data: params.data,
        headers: {
          token: params.data.token,
          "Content-Type": "application/json;charset=UTF-8"
        }
      }).then(res => {
        resolve(res);
      });
    });
  }
}
export default Http;
