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
        const {dispatch,searchValue} = this.props
        // console.log(searchValue,'search')
        dispatch({
            type:'template/getTemplates',
            payload:{
                query:{
                    key:''
                }
            }
        })
    }
    publicGet = (value)=>{
        this.props.dispatch({
            type:"template/getTemplates",
            payload:{
                query:{
                    key:value
                }
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
         this.publicGet(e.target.value)
     }
    //  搜索
    onSearch = (value) =>{
        this.publicGet(value)
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
    const {searchValue,templates,pageNumber} = this.props;
    // console.log(searchValue)
    // console.log(templates,111111111111)
    let displayTems = templates.slice((pageNumber-1)*18,pageNumber*18)
    return (
        <div style={{padding:20}}>
            <div className={styles.dec}>
                <div className={styles.searchBar}>
                    <Search
                    placeholder="请输入模板名称"
                    value={searchValue}
                    allowClear
                    onSearch={this.onSearch}
                    onChange={this.onChange}
                    style={{ width: 250 }}
                    size="large"
                    />
                    <Button size="large" onClick={this.add}>新建模板</Button>
                </div>
                <div className={styles.img}>
                    <img src={require(`../../assets/imgs/dec1.png`)} className={styles.img}/>
                </div>
            </div>
            <Row gutter={16} style={{padding:'0px 0px'}}>
            {
                displayTems.map((item,index)=>{
                    return(
                        <Col sm={12} md={8} lg={6} xl={4} xxl={4} key={index}>
                            <TemplateCard item={item}/>
                        </Col>)
                })
            }
            </Row>
            <div className={styles.page}>
                <Page total={templates.length}/>
            </div>
            <ModalTemplate/>
        </div>
    );
}
}
 export default connect(({template})=>(template))(Template)