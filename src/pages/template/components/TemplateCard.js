// import {connect,routerRedux} from 'dva';
import { Component} from 'react';
import { connect } from 'dva';
import { Icon, Modal, } from 'antd';
// import SearchOnly from 'components/searchOnly';
import styles from './TemplateCard.less';
import imgT from '../../../assets/imgs/template.png'

import moment from 'moment';

const confirm=Modal.confirm;
class TemplateCard extends Component {
    constructor(props) {
        super(props)
        this.state={
            
        }
      }
    // 编辑模板
    edit = (id,name)=>{
        console.log(1111)
        this.props.dispatch({
            type:'template/updateStates',
            payload:{
                flag:'edit',
            }
        })
        this.props.dispatch({
            type:'template/getTemplateDetail',
            payload:{
                id:id
            }
        })
    }
    //   删除模板
    delete = (id,name)=>{
        const {dispatch} = this.props
        confirm({
            title: '确定要删除该模板吗?',
            content: name,
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                dispatch({
                    type:'template/deleteTemplate',
                    payload:{
                        templateId:id
                    }
                })
              console.log('确定删除');
            },
          });
    }

render(){
    const {searchValue,item} =this.props;
    return (
        <div className={styles.card}>
            <div className={styles.img}><img src={imgT} style={{width:'100%'}}/></div>
            <p className={styles.name}>{item.name}</p>
            <div className={styles.lastRow}>
                <div>{item.kind}</div>
                <div>
                    <Icon type="edit" className={styles.icon} onClick={()=>{this.edit(item.id,item.name)}} />
                    <Icon type="delete" className={styles.icon} style={{marginLeft:10}} onClick={()=>{this.delete(item.id,item.name)}}/>
                </div>
            </div>
        </div>
    );
}
}
 export default connect(({template})=>(template))(TemplateCard)