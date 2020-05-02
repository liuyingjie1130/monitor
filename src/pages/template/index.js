// import {connect,routerRedux} from 'dva';
import { Component} from 'react';
import { connect } from 'dva';
import { Spin, Button, Icon, Card, Input,Modal,Row,Col,Pagination } from 'antd';
import TemplateCard from './components/TemplateCard'
import ModalTemplate from './components/ModalTemplate'
import Page from './components/Page'
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
    componentDidMount(){
        this.props.dispatch({
            type:'template/getTemplates',
            payload:{

            }
        })
    }
    //  搜索框输入 
    onChange = (e) =>{
        this.props.dispatch({
            type:"template/updateStates",
            payload:{
                searchValue:e.target.value
            }
         })
     }
    //  搜索
    onSearch = (value) =>{
        // console.log(value)
        this.props.dispatch({
            type:"template/getAllDrivers",
            payload:{
                index:1
            }
        })
    }
    // 添加模板
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
            <div className={styles.searchBar}>
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
            <div className={styles.page}>
                <Page/>
            </div>
            <ModalTemplate/>
        </div>
    );
}
}
 export default connect(({template})=>(template))(Template)