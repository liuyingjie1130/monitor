import { Component} from 'react';
import { connect } from 'dva';
import { Icon, Modal, } from 'antd';
import styles from './Littlecard.less'

function info() {
    Modal.info({
        title: '实时监控情况',
        content: (
            <div>
                <p>种植号名称：</p>
                <p>光照强度：</p>
                <p>二氧化碳浓度：</p>
                <p>氧气浓度：</p>
                <p>大气温度：</p>
                <p>大气湿度：</p>
                <p>土壤温度：</p>
                <p>土壤湿度：</p>
            </div>
        ),
        onOk() {},
    });
}

class Littlecard extends Component {
    constructor(props) {
        super(props)
        this.state={
            
        }
      }
    
    details = (id)=>{
   
        // console.log(id)
        this.props.dispatch({
            type:'current/updateStates',
            payload:{
                // flag:'details',
                visible:true
            }
        })
    }

render(){
    // console.log(searchValue)
    return (
        <div className={styles.card}>
            <div>
                <span>编号名称：</span>
                <span className={styles.right}><Icon type="alert"theme="twoTone" twoToneColor="#52c41a"/></span>
            </div>
            <div>
                <span>时间：{new Date().toLocaleTimeString()}</span>
                <span className={styles.right}><Icon type="zoom-in" onClick={info}/></span>
            </div>
        </div>
    );
}
}
 export default connect(({current})=>(current))(Littlecard)