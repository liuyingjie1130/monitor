import { Component} from 'react';
import { connect } from 'dva';
import { Icon, Modal, Button} from 'antd';
import styles from './Card.less';
import Details from './Details.js';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }
    details = (id)=>{
        this.props.dispatch({
            type:'alert/updateStates',
            payload:{
                visible:true,
            }
        })
    }

render(){
    const {item}=this.props
    console.log(item);
    let data=item;
    console.log(data);
    return (
        <div className={styles.card} >
            <div>
                <p>位号：{item.site}</p> 
                <p>实测值：{item.value}</p>
                <div className={styles.bottom}>
                <p>上下限：{item.min}~{item.max} {item.unit}</p>    
                    <div className={styles.right}><Details item={item}/></div>       
                </div>            
            </div>
        </div>
    );
}
}
 export default connect(({alert})=>(alert))(Card)