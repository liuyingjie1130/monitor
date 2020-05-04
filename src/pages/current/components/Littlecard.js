import { Component} from 'react';
import { connect } from 'dva';
import { Icon, Modal, } from 'antd';
import styles from './Littlecard.less'

function info() {
    Modal.info({
        title: '实时监控情况',
        content: (
            <div>
                <p>种植号名称：1</p>
                <p>光照强度：2.838×10^(27)cd</p>
                <p>二氧化碳浓度：1.977g/L</p>
                <p>氧气浓度：310mg/L</p>
                <p>大气温度：11℃</p>
                <p>大气湿度：30%RH</p>
                <p>土壤温度：6℃</p>
                <p>土壤湿度：17%</p>
            </div>
        ),
        onOk() {},
    });
}
let dataArr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
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
    const {item} = this.props
    return (
        <div className={styles.card} >
            {/* <div>
                <span>编号名称：{Math.floor(Math.random()*30+1)}</span>
                <span className={styles.right}><Icon type="alert"theme="twoTone" twoToneColor="#52c41a"/></span>
            </div>
            <div>
                <span>时间：{new Date().toLocaleTimeString()}</span>
                <span className={styles.right}><Icon type="zoom-in" onClick={info}/></span>
            </div> */}
            <div>{item.name}</div>
            <div className={styles.cen}><span style={{fontSize:'40px'}}>{item.value}</span><span>{item.unit}</span></div>
            <div style={{color:'grey'}}>{new Date(item.time).toLocaleString()}</div>
        </div>
    );
}
}
 export default connect(({current})=>(current))(Littlecard)