import Http from "./http";
let _Http = new Http();
export default class Product {
  login(obj) {
    return _Http.request({
      type: "post",
      url: "http://www.wyunfei.com:8002/apis/user/pc/api/user/login/password",
      data: {
        clientId: obj.clientId,
        ip: obj.ip,
        mobile: obj.mobile,
        password: obj.password
      }
    });
  }
}
