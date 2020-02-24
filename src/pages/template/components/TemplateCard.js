// import {connect,routerRedux} from 'dva';
import { Component} from 'react';
import { connect } from 'dva';
import { Spin, Button, Icon, Card, Input,Modal,Row,Col } from 'antd';
// import SearchOnly from 'components/searchOnly';
import styles from './templateCard.less';

import moment from 'moment';

const confirm=Modal.confirm;
class TemplateCard extends Component {
    constructor(props) {
        super(props)
        this.state={
            
        }
      }
    

render(){
    const {searchValue} =this.props;
    console.log(searchValue)
    return (
        <div className={styles.card}>
            {searchValue}
        </div>
    );
}
}
 export default connect(({template})=>(template))(TemplateCard)