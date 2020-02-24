import {fetch} from 'dva'
import {message} from 'antd'

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    message.error('服务器异常')
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export default async function request (action, options) {
  console.log(`method: ${options.method}`, {action: `${action}`, params: options.body});

  let data={};
  let response;
  response = await fetch(`/${action}`, options);
  checkStatus(response);

  data = await response.json();
  console.log(`RESPONSE:${action}`, data);
  return {...data};
}
