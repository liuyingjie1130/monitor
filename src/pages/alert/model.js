import apis from '../../services/index'
export default {
    namespace: 'alert',
    state: {
      searchValue:'',
      visible:false,
      // flag:'add',
      // tableData:[],
      infor:[]
  },
    subscriptions: {
      setup({dispatch, history}) {
        history.listen(location => {
        });
      }
    },
    effects: {
        *getAllDrivers({ payload }, { call, put, select }) { 
            const data=yield call(apis.selectAlert,payload); 
            if(data.code==200){
              yield put({
                  type:"updateStates",
                  payload:{
                    infor:data.data
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
  