import Axios from "axios";
import Qs from "qs";

class Http {
  request(params) {
    return new Promise(resolve => {
      Axios({
        method: params.type || "get",
        url: params.url,
        data: Qs.stringify(params.data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        resolve(res);
      });
    });
  }
}
export default Http;
