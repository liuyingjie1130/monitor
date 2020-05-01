import apis from '../../services/index'
export default {
    namespace: 'alert',
    state: {
      // searchValue:'',
      visible:false,
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
        *getAllDrivers({ payload }, { call, put, select }) { 
            const data=yield call(apis.getAllDrivers,payload);
           
            if(data.code==200){
              yield put({
                  type:"updateStates",
                  payload:{
                    drivers:data.data
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
  