// import {connect,routerRedux} from 'dva';
import { Component } from 'react';
import { connect } from 'dva';
import { Spin, Button, Icon, Card, Input,Modal,Row,Col } from 'antd';
import Littlecard from './components/Littlecard.js';
// import Details from './components/Details.js';
import styles from './index.less';

import moment from 'moment';

class Current extends Component {
    constructor(props) {
        super(props)
        this.state={
            
        }
      }
      
    onChange = (e) =>{
        this.props.dispatch({
            type:"current/updateStates",
            payload:{
                searchValue:e.target.value
            }
         })
     }
    onSearch = (value) =>{
        // console.log(value)
        this.props.dispatch({
            type:"current/getAllDrivers",
            payload:{
                index:1
            }
        })
    }

    render(){
        // const {searchValue} = this.props;
        // console.log(searchValue)
        return (
            <div style={{padding:20}}>
                
                <Row gutter={16} style={{padding:'0px 0px'}}>
                {
                    [1,2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item,index)=>{
                        return(
                            <Col sm={12} md={8} lg={6} xl={4} xxl={4} key={index}>
                                <Littlecard />
                            </Col>)
                    })
                }
                </Row>
                {/* <Details/> */}
            </div>
        );
    }
}
export default connect(({current})=>(current))(Current);