
/*
  封装的request
*/
function request(url,data = {},method = "GET"){
  return new Promise(function (resolve, reject) {
    uni.request({
      url: url,
      data: data,
      method: method,
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: res => {
        resolve(res);
      },
      fail: error => {
        reject(error);
      }
    })
  });
}
function requestPost(url,data = {},method = "POST"){
  return new Promise(function (resolve, reject) {
    uni.request({
      url: url,
      data: data,
      method: method,
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: res => {
        resolve(res);
      },
      fail: error => {
        reject(error);
      }
    })
  });
}
module.exports = {
  request: request,
	requestPost: requestPost
}