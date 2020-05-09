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
        <div className={styles.card} >
            <div>
                <p>位号：1</p> 
                <p>实测值：</p>
                <div className={styles.bottom}>
                    <span>上下限：</span>    
                    <span className={styles.right}><Details /></span>       
                </div>            
            </div>
        </div>
    );
}
}
 export default connect(({alert})=>(alert))(Card)