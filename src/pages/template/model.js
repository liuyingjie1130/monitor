import apis from '../../services/index'
import { message } from 'antd';
export default {
    namespace: 'template',
    state: {
      searchValue:'',
      visible:false,
      flag:'add',
      tableData:[],
      templates:[],
      template:{},
      pageNumber:1,
  },
    subscriptions: {
      setup({dispatch, history}) {
        history.listen(location => {
            // 初始化
          if(location.pathname === '/template'){
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
        *getTemplates({ payload }, { call, put, select }) { 
            const data=yield call(apis.getTemplates,payload);
           
            if(data.code==200){
              yield put({
                  type:"updateStates",
                  payload:{
                    templates:data.data
                  }
              })
            }
        },
        *getTemplateDetail({ payload }, { call, put, select }) { 
          console.log(payload,8888)
          const dataT=yield call(apis.getTemplateDetail,payload);
          const dataA=yield call(apis.getTemplateTags,payload);
         
          if(dataT.code==200 && dataA.code==200){
            console.log(dataA,dataT,99999999,dataT.data[0])
            yield put({
              type:"updateStates",
              payload:{
                template:dataT.data[0],
                  tableData:dataA.data,
                  visible:true
              }
             })
          }
          
        },
        *getTemplateTags({ payload }, { call, put, select }) { 
            const data=yield call(apis.getTemplateTags,payload);
           
            if(data.code==200){
              yield put({
                  type:"updateStates",
                  payload:{
                    templateTags:data.data
                  }
              })
            }
        },
        *addTemplate({ payload }, { call, put, select }) { 
          const data=yield call(apis.addTemplate,payload);
         
          if(data.code==200){
            message.success('添加模板成功')
            yield put({type:"updateStates",payload:{visible:false}})
            yield put({
              type:"getTemplates",
              payload:{
                query:{
                  key:""
                }
              }
            })
          }else if(data.code===5){
            message.error('模板名存在')
          }else{
            message.error('添加模板失败')
          }
      },
      *deleteTemplate({ payload }, { call, put, select }) { 
        const data=yield call(apis.deleteTemplate,payload);
       
        if(data.code==200){
          message.success('删除模板成功')
          yield put({
              type:"getTemplates",
              payload:{
                query:{
                  key:""
                }
              }
          })
        }
      },
      *updateTemplate({ payload }, { call, put, select }) { 
        const data=yield call(apis.updateTemplate,payload);
       
        if(data.code==200){
          message.success('编辑模板成功')
          yield put({type:"updateStates",payload:{visible:false}})
          yield put({
            type:"getTemplates",
            payload:{
              query:{
                key:""
              }
            }
          })
        }else if(data.code===5){
          message.error('模板名存在')
        }else{
          message.error('编辑模板失败')
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
  