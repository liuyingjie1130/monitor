// import {connect,routerRedux} from 'dva';
import { Component} from 'react';
import { connect } from 'dva';
import { Spin, Button, Icon, Card, Input,Modal,Row,Col } from 'antd';
import TemplateCard from './components/TemplateCard'
import ModalTemplate from './components/ModalTemplate'
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
    add = () =>{
        this.props.dispatch({
            type:'template/updateStates',
            payload:{
                flag:'add',
                visible:true
            }
        })
    }

render(){
    const {searchValue} = this.props;
    // console.log(searchValue)
    return (
        <div style={{padding:20}}>
            <div style={{display:'flex',minWidth:400,width:400,justifyContent:'space-between'}}>
                <Search
                placeholder="请输入模板名称"
                value={searchValue}
                onSearch={this.onSearch}
                onChange={this.onChange}
                style={{ width: 250 }}
                size="large"
                />
                <Button size="large" onClick={this.add}>新建模板</Button>
            </div>
            
            <Row gutter={16} style={{padding:'0px 0px'}}>
            {
                [1,2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item,index)=>{
                    return(
                        <Col sm={12} md={8} lg={6} xl={4} xxl={4} key={index}>
                            <TemplateCard />
                        </Col>)
                })
            }
            </Row>
            <ModalTemplate/>
        </div>
    );
}
}
 export default connect(({template})=>(template))(Template)