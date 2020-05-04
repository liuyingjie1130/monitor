import { Component} from 'react';
import { connect } from 'dva';
import { Spin, Button, Icon, Card, Input,Modal,Row,Col,Pagination,Empty } from 'antd';
import styles from './index.less';
import Littlecard from './components/Littlecard.js'
import Search from './components/Search.js'
import Page from './components/Page.js'

import moment from 'moment';

// const {Search}=Input;
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
    const {searchValue,rt} = this.props;
    console.log(searchValue,'searchvalue',rt)
    return (
        <div>
            <div><Search/></div>
            <div style={{padding:20}}> 
                {
                    searchValue?<Row gutter={16} style={{padding:'0px 0px'}}>
                    {
                        rt.map((item,index)=>{
                            return(
                                <Col sm={12} md={8} lg={6} xl={4} xxl={4} key={index}>
                                    <Littlecard item={item}/>
                                </Col>)
                        })
                    }
                    </Row>:<Empty description={'请先选择种植位'} imageStyle={{height:'300px'}}/>
                }           
                
            </div>
            {/* {this.props.test.map((item)=><div>{item}</div>)} */}
            {/* <div style={{float:"right",marginRight:20,marginTop:40}}>
                <Page/>
            </div> */}
        </div>
    );
}
}
 export default connect(({current})=>(current))(Finsh)