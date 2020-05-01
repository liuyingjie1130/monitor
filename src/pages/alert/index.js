import { Component} from 'react';
import { connect } from 'dva';
import { Spin, Button, Icon, Input,Modal,Row,Col,Pagination } from 'antd';
import SearchBar from '../../components/highSearch/index.js';
import Page from './components/Page.js';
import Card from './components/Card.js'
import styles from './index.less';

import moment from 'moment';


const confirm=Modal.confirm;
class Finsh extends Component {
    constructor(props) {
        super(props)
        this.state={
            
        }
      }
    //  搜索框输入 
    onChange = (e) =>{
        this.props.dispatch({
            type:"current/updateStates",
            payload:{
                searchValue:e.target.value
            }
         })
     }
    //  搜索
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
        const {searchValue} = this.props;
        return (
            <div>
                <div><SearchBar/></div>
                <div style={{padding:20}}>            
                    <Row gutter={16} style={{padding:'0px 0px'}}>
                    {
                        [1,1,1,1,1,1,1,1,1,1,1,1].map((item,index)=>{
                            return(
                                <Col sm={12} md={8} lg={6} xl={4} xxl={4} key={index}>
                                    <Card/>
                                </Col>)
                        })
                    }
                    </Row>
                </div>   
                <div style={{float:"right",marginRight:20,marginTop:40}}>
                    <Page/>
                </div>
            </div>
        );
    }
}
 export default connect(({alert})=>(alert))(Finsh)