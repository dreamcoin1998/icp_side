import axios from 'axios'
import { message } from 'antd'


// 启用cookie
axios.defaults.withCredentials = true;
axios.defaults.timeout = 100000;
// BaseUrl
axios.defaults.baseURL = "http://icp.gaoblog.cn";


/**
 * http request 拦截器
 */
axios.interceptors.request.use(
    (config) => {
        config.data = JSON.stringify(config.data);
        config.headers = {
            "Content-Type": "application/json",
        };
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
    (response) => {
        // 如果错误码不为0即请求正常，弹出框
        if (response.data.code !== 0) {
            message.warning(response.data.msg);
        } else {
            response;
        }
    },
    (error) => {
        message.error("请求出错" + error);
    }
);

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
 export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
          params: params,
        }).then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
}

  /**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data).then(
        (response) => {
          //关闭进度条
          resolve(response.data);
        },
        (err) => {
          reject(err);
        }
      );
    });
}

//统一接口处理，返回数据
export default function (fecth, url, param) {
    let _data = "";
    return new Promise((resolve, reject) => {
      switch (fecth) {
        case "get":
          console.log("begin a get request,and url:", url);
          get(url, param)
            .then(function (response) {
              resolve(response);
            })
            .catch(function (error) {
              console.log("get request GET failed.", error);
              reject(error);
            });
          break;
        case "post":
          post(url, param)
            .then(function (response) {
              resolve(response);
            })
            .catch(function (error) {
              console.log("get request POST failed.", error);
              reject(error);
            });
          break;
        default:
          break;
      }
    });
  }

