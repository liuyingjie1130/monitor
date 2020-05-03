import { Component} from 'react';
import { connect } from 'dva';
import { Spin, Button, Icon, Card, Input,Modal,Row,Col,Pagination } from 'antd';
import Littlecard from './components/Littlecard.js';
import ModalTemplate from './components/Modeltemplate';
import Page from './components/Page.js'
import styles from './index.less';

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
    // console.log(searchValue)
    return (
        <div>
            <div style={{padding:20}}>  
                {/* 此处为搜索的那堆 */}
                <div className={styles.searchBar}>
                <Search
                placeholder="请输入名称"
                value={searchValue}
                onSearch={this.onSearch}
                onChange={this.onChange}
                style={{ width: 250 }}
                size="large"
                />
                <Button size="large" onClick={this.add}>新建种植号</Button>
            </div>
                <div>
                    <Row gutter={16} style={{padding:'0px 0px'}}>
                    {
                        [1,2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item,index)=>{
                            return(
                                <Col sm={12} md={8} lg={6} xl={4} xxl={4} key={index}>
                                    <Littlecard/>
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