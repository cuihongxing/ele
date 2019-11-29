import Http from "./http";
let _Http = new Http();

export default class Product {
  login(obj) {
    return _Http.request({
      type: "post",
      url: "http://www.wyunfei.com:8002/apis/user/pc/api/user/login/password",
      data: {
        clientId: "lkb65617f842ad4c37895a733b8de43cbb",
        ip: "127.0.0.0",
        mobile: obj.mobile,
        password: obj.password
      }
    });
  }
  List(token) {
    return _Http.request({
      type: "post",
      url: "http://www.wyunfei.com:8002/apis/system/pc/menu/user/list",
      data: {
        token: token,
        jj: {}
      }
    });
  }
}
