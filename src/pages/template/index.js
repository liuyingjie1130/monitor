// import {connect,routerRedux} from 'dva';
import { Component} from 'react';
import { connect } from 'dva';
import { Spin, Button, Icon, Card, Input,Modal,Row,Col } from 'antd';
import TemplateCard from './components/TemplateCard'
import styles from './index.less';

import moment from 'moment';

const {Search}=Input;
const confirm=Modal.confirm;
class Template extends Component {
    constructor(props) {
        super(props)
        this.state={
            
        }
      }
     onChange = (e) =>{
        this.props.dispatch({
            type:"template/updateStates",
            payload:{
                searchValue:e.target.value
            }
         })
     }
     onSearch = (value) =>{
        // console.log(value)
        this.props.dispatch({
            type:"template/getAllDrivers",
            payload:{
                index:1
            }
        })
    }

render(){
    const {searchValue} =this.props;
    console.log(searchValue)
    return (
        <div style={{padding:20}}>
            <Search
                placeholder="请输入模板名称"
                value={searchValue}
                onSearch={this.onSearch}
                onChange={this.onChange}
                style={{ width: 250 }}
                size="large"
            />
            {
                [1,2,3].map((item,index)=>{
                    return(<TemplateCard/>)
                })
            }
        </div>
    );
}
}
 export default connect(({template})=>(template))(Template)