import { Component} from 'react';
import { connect } from 'dva';
import { Spin, Button, Icon, Input,Modal,Row,Col,Pagination } from 'antd';
import SearchBar from './components/highSearch/index.js';
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
      componentDidMount(){
        this.props.dispatch({
            type:'alert/selectAlert',
            payload:{
            }
        })
      }
    render(){
        const {searchValue,infor} = this.props;
        console.log(infor);
        let cardNum=[];
        for(var i=0;i<infor.length;i++){
            cardNum.push(infor[i])
        }
        console.log(cardNum);
        return (
            <div>
                <div><SearchBar/></div>
                <div style={{padding:20}}>            
                    <Row gutter={16} style={{padding:'0px 0px'}}>
                    {
                        cardNum.map((item,index)=>{
                            return(
                                <Col sm={8} md={6} lg={6} xl={6} xxl={2} key={index}>
                                    <Card item={item}/>
                                </Col>)
                        })
                    }
                    </Row>
                </div>   
                {/* <div style={{float:"right",marginRight:20,marginTop:40}}>
                    <Page/>
                </div> */}
            </div>
        );
    }
}
 export default connect(({alert})=>(alert))(Finsh)