import { Component} from 'react';
import { connect } from 'dva';
import { Spin, Button, Icon, Card, Input,Modal,Row,Col,Pagination } from 'antd';
import Littlecard from './components/Littlecard.js';
import ModalTemplate from './components/Modeltemplate';
import Page from './components/Page.js'
import styles from './index.less';
import SearchBar from './components/Search'

import moment from 'moment';

const {Search}=Input;
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
            type:"site/updateStates",
            payload:{
                searchValue:e.target.value
            }
         })
     }
    //  搜索
    onSearch = (value) =>{
        // console.log(value)
        this.props.dispatch({
            type:"site/getAllDrivers",
            payload:{
                index:1
            }
        })
    }
    // 添加新建种植号
    add = () =>{
        this.props.dispatch({
            type:'site/updateStates',
            payload:{
                flag:'add',
                visible:true
            }
        })
    }
    
render(){
    const {searchValue} = this.props;
    let siteArr = [
        {name:'苹果一号',kind:'温带季风植物'},
        {name:'甘蔗一号',kind:'热带季风植物'},
        {name:'椰子林',kind:'热带雨林植物'},
        {name:'甘蔗二号',kind:'热带季风植物'},
        {name:'桃树一号',kind:'温带季风植物'},
        {name:'苹果二号',kind:'温带季风植物'},
        {name:'甘蔗三号',kind:'热带季风植物'},
        {name:'苹果三号',kind:'温带季风植物'},
        {name:'桃树二号',kind:'温带季风植物'},
        {name:'柚子一号',kind:'热带季风植物'},
        {name:'芭蕉一号',kind:'热带雨林植物'},
        {name:'桃树三号',kind:'温带季风植物'},
        {name:'芭蕉一号',kind:'热带雨林植物'},
        {name:'葡萄藤',kind:'地中海植物'},
        {name:'咖啡',kind:'热带沙漠植物'},
        {name:'无花果树一号',kind:'地中海植物'},
        {name:'芦荟',kind:'热带沙漠植物'},
        {name:'柑橘一号',kind:'地中海植物'},
    ]
    // console.log(searchValue)
    return (
        <div>
            <div style={{padding:20}}>  

                {/* 此处为搜索的那堆 */}
                <div className={styles.searchBar}>
                    <span className={styles.left}><SearchBar/></span>
                    <div className={styles.new}>
                        <Button className={styles.right} size="large" onClick={this.add}>新建种植号</Button>
                    </div>
                </div> 
                <div>
                    <Row gutter={16} style={{padding:'0px 0px'}}>
                    {
                        siteArr.map((item,index)=>{
                            return(
                                <Col sm={12} md={8} lg={6} xl={4} xxl={4} key={index}>
                                    <Littlecard item={item}/>
                                </Col>)
                        })
                    }
                    </Row>
                    <ModalTemplate/>
                </div>    
                <div className={styles.page}>
                    <Page/>
                </div>
            </div>
        </div>
    );
}
}
 export default connect(({site})=>(site))(Finsh)