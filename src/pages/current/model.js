import apis from '../../services/index'
export default {
    namespace: 'current',
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
          if(location.pathname !== '/current'){
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
    //异步操作-调接口
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
  
    //同步操作--指哪打哪
    reducers: {
      updateStates(state, action){
        return {
          ...state,
          ...action.payload
        }
      }
    },
  };
  