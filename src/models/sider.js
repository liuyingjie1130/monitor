export default {
  namespace: 'sider',
  state: {
    selectedKeys: ['/tags'],
},
  subscriptions: {
		setup({dispatch, history}) {
			history.listen(location => {
        if(location.pathname !== '/login'){

          let selectedKeys = []
          if(location.pathname.includes('/modifyPassword')){
            selectedKeys = ['/user']
          }else{
            selectedKeys = [location.pathname];
          }
          dispatch({
            type: 'updateStates',
            payload: {
              selectedKeys
            }
          })
        }

      });
    }
  },
  effects: {

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
