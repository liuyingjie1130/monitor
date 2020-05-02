import apis from 'api'
import { routerRedux} from 'dva'
import { message, Button } from 'antd';
export default {
    namespace: 'login',
    state: {
      registerVisible:false
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
              yield put(routerRedux.push('/current'))
              window.localStorage.setItem('user_name',data.data)
            }else{
              message.error('用户名或密码错误！');
            }
          },
          *register({ payload }, { call, put, select }) { 
            const data=yield call(apis.register,payload);
           
            if(data.code==200){
              message.success('注册成功！');
              yield put({
                type:"updateStates",
                payload:{
                  registerVisible:false
                }
            })
            }else{
              message.error('用户已存在！');
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
  