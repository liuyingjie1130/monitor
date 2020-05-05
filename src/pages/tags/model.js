import apis from '../../services/index'
import io from 'socket.io-client'
export default {
    namespace: 'tags',
    state: {
      searchValue:'',
      visible:false,
      rt:[],
      // flag:'add',
      // tableData:[]
  },
    subscriptions: {
      setup({dispatch, history}) {
        history.listen(location => {
            // 初始化
          // if(location.pathname !== '/template'){
          //   dispatch({
          //     type: 'updateStates',
          //     payload: {
          //       searchValue:'111'
          //     }
          //   })
          // }
  
        });
      }
    },
    effects: {
        *getTags({ payload }, { call, put, select }) { 
            const data=yield call(apis.getTags,payload);
           console.log(data,222);
            if(data.code==200){
              yield put({
                  type:"updateStates",
                  payload:{
                    rt:data.data
                  }
              })
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
  