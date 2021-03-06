// import {connect,routerRedux} from 'dva';
import { Component} from 'react';
import { connect } from 'dva';
import { Icon, Modal, } from 'antd';
// import SearchOnly from 'components/searchOnly';
import styles from './Littlecard.less';
import imgT from '../../../assets/imgs/template.png'

import moment from 'moment';

const confirm=Modal.confirm;
class Littlecard extends Component {
    constructor(props) {
        super(props)
        this.state={
            
        }
      }
    //编辑模板
    edit = (id)=>{
        console.log(id);
        this.props.dispatch({
            type:'site/updateStates',
            payload:{
                flag:'edit',
                visible:true
            }
        })
    }
    //删除模板
    delete = (id,name)=>{
        // console.log(id)
        confirm({
            title: '确定要删除该种植位吗?',
            content: name,
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
              console.log('确定删除');
            },
          });
    }

render(){
    const {searchValue,item} =this.props;
    // console.log(searchValue)
    return (
        <div className={styles.card}>
            <div className={styles.img}><img src={require(`../../../assets/imgs/${item.kind}.png`)} style={{width:'100%'}}/></div>
    <p className={styles.name}>{item.name}</p>
            <div className={styles.lastRow}>
                <div>{item.kind}</div>
                <div>
                    <Icon type="edit" className={styles.icon} onClick={()=>{this.edit(11)}} />
                    <Icon type="delete" className={styles.icon} style={{marginLeft:10}} onClick={()=>{this.delete(11,'苹果种植位')}}/>
                </div>
            </div>
        </div>
    );
}
}
 export default connect(({site})=>(site))(Littlecard)