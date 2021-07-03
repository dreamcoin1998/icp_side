import axios from 'axios'
import { message } from 'antd'


// 启用cookie
axios.defaults.withCredentials = true;
axios.defaults.timeout = 100000;
// BaseUrl
axios.defaults.baseURL = "http://127.0.0.1:8000";


/**
 * http request 拦截器
 */
axios.interceptors.request.use(
    (config) => {
        // config.data = JSON.stringify(config.data);
        if (localStorage.getItem("token")) {
          config.headers = {
            "Authorization": localStorage.getItem("token"),
          };
        }
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
            if (response.headers.authorization) {
              localStorage.setItem("token", response.headers.authorization)
            }
            return response;
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

export function post(url, data, config) {
    return new Promise((resolve, reject) => {
      axios.post(url, data, config).then(
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
export default function (fecth, url, param, config) {
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
          post(url, param, config)
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

