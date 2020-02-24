import api from './api';
import request from '../utils/request.js';
import { cloneDeep, isEmpty } from 'lodash';
import pathToRegexp from 'path-to-regexp';
import qs from 'querystring';
const gen = apiName=>{
  return function(payload){
    const apiArray = apiName.split(' ');
    let method = 'GET';//请求方式默认值
    let action ;
    if(apiArray.length>1){
      method = apiArray[0];
      action = apiArray[1];
    }
    //处理action和参数
    const clonePayload = cloneDeep(payload);

    const match = pathToRegexp.parse(action);
    action = pathToRegexp.compile(action)(payload);
    // console.log(clonePayload,match)
    for (const item of match) {
      console.log(item)
      if (item instanceof Object && item.name in clonePayload) {
        delete clonePayload[item.name]
      }
    }
    let options = {
      method
    };
    const storage = window.localStorage;
    if(method === 'GET'){
      options.headers = {
        'token': storage.token,
        'tenantId': storage.tenantId,
        'username': storage.name
      }
      if (clonePayload){
        Object.keys(clonePayload).forEach((item) => {
          if (typeof(clonePayload[item]) === 'object' && clonePayload[item]!==null){
            clonePayload[item]=JSON.stringify(clonePayload[item])
          }
        })
      }

      console.log(clonePayload, 'requestAction')

      action = `${action}${isEmpty(clonePayload) ? '' : '?'}${qs.stringify(clonePayload)}`;
    }else{
      options.headers = {
        'Content-Type': 'application/json',
        'token': storage.token,
        'tenantId': storage.tenantId,
        'username': storage.name
      }
      options.body = JSON.stringify(clonePayload)
    }
    return request(action, options);
  }
}
let apis = {}
for (let key in api) {
  apis[key] = gen(api[key])
}
export default apis;
