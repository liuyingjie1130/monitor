// import {connect,routerRedux} from 'dva';
import { Component} from 'react';
import { connect } from 'dva';
import { Spin, Button, Icon,Modal} from 'antd';
import React from 'react';
import styles from './Littlecard.less'


import moment from 'moment';

function info() {
    Modal.info({
        title: '实时监控信息',
        content: (
            <div>
                <p>种植号名称：</p>
                <p>光照强度：</p>
                <p>二氧化碳浓度：</p>
                <p>氧气浓度：</p>
                <p>大气温度：</p>
                <p>大气湿度：</p>
                <p>土壤温度：</p>
                <p>土壤湿度：</p>
            </div>
        ),
        onOk() {},
    });
}
// const {Search}=Input;
// const confirm=Modal.confirm;

class Littlecard extends React.Component {
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
        console.log(value)
        this.props.dispatch({
            type:"current/getAllDrivers",
            payload:{
                index:1
            }
        })
    }

    // details = (id)=>{
    //     console.log(id);
    //     this.props.dispatch({
    //         type:'current/updateStates',
    //         payload:{
    //             // flag:'details',
    //             visible:true
    //         }
    //     })
    // }

    render(){  
        const {searchValue} =this.props;
        console.log(searchValue)
        return (
            <div className={styles.page}>
                {/* 卡片 */}
                <div className={styles.card}>
                    <div className={styles.case}>
                        <span>编号名称：1</span>
                        <span className={styles.right}><Icon type="alert" theme="twoTone" twoToneColor="#52c41a"/></span>
                    </div>
                    <div className={styles.case}>
                        <span>时间：{new Date().toLocaleTimeString()}</span>
                        {/* <span className={styles.right}><Icon type="zoom-in" onClick={()=>{this.details(1)}}/></span> */}
                        <span className={styles.right}><Icon type="zoom-in" onClick={info}/></span>
                    </div>
                </div>
            </div>  
        );
    }
}

export default connect(({current})=>(current))(Littlecard)

