import apis from 'api'
import { routerRedux} from 'dva'
import { message, Button } from 'antd';
export default {
    namespace: 'login',
    state: {
    },
    subscriptions: {
      setup({dispatch, history}) {
        history.listen(location => {
            // 初始化
          if(location.pathname === '/login'){
            // dispatch({
            //   type: 'updateStates',
            //   payload: {
            //     searchValue:'111'
            //   }
            // })
          }
  
        });
      }
    },
    effects: {
        *login({ payload }, { call, put, select }) { 
            const data=yield call(apis.login,payload);
           
            if(data.code==200){
              message.success('登录成功！');
              yield put(routerRedux.push('/'))
            }else{
              message.error('用户名或密码错误！');
            }
          },
    },
  
    reducers: {
      updateStates(state, action){
        return {
          ...state,
          ...action.payload
        }
      }
    },
  };
  