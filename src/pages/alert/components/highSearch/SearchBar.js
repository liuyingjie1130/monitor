import React from 'react';
import { Collapse ,Icon,Button,Select,Divider,message,Input,DatePicker} from 'antd';
import styles from './SearchBar.less';
import toExcel from '../../../../utils/toExcel'
import {connect} from 'dva'

const {Option} = Select;
const { RangePicker } = DatePicker;
class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            kind:undefined,
            site:'',
            attr:'',
            time:[],
        }
    }
    onChangeKind = (value)=>{
        console.log(value)
        this.setState({
            kind:value
        })
    }
    onChangeSite = (e)=>{
        console.log(e.target.value)
        this.setState({
            site:e.target.value
        })
    }
    onChangeAttr = (e)=>{
        console.log(e.target.value)
        this.setState({
            attr:e.target.value
        })
    }
    onChangeTime = (value, dateString)=> {
        // console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
        this.setState({
            time:value
        })
    }
    // 清空
    empty = ()=>{
        this.setState({
            kind:undefined,
            site:'',
            attr:'',
            time:[]
        })
    }
    // 确定时间
    onTimeOk = (value)=>{
        console.log(value,'timeValue')
    }
    // 搜索
    onSearch = ()=>{
        const kind = Boolean(this.state.kind)?this.state.kind:undefined,
              site = Boolean(this.state.site)?this.state.site:undefined,
              attr = Boolean(this.state.attr)?this.state.attr:undefined,
              time = this.state.time,
              start=time[0],
              end=time[1];
        this.props.dispatch({
            type:'alert/selectAlert',
            payload:{
                kind,site,attr,start,end
            }
        })
    }
    // 导出
    export = async (e) => {
        console.log("export")
    }
    render(){
        return(
            <div className={styles.search}>

            {/* 品系下拉框 */}
                <div className={styles.big}>
                    <p style={{ float: 'left', fontSize: '12px', fontWeight: 600 }}>品系</p>
                    <Select  value={this.state.kind} onChange={this.onChangeKind} placeholder="请选择品系" showSearch size='large'
                            style={{ width: '140px', height: '32px', marginLeft: '8px', fontSize: '12px' }} allowClear>
                        <Option value="苹果树">苹果树</Option>
                        <Option value="梨树">梨树</Option>
                        <Option value="玫瑰花">玫瑰花</Option>
                    </Select>
                </div>
            {/* 种植位输入框 */}
                <div className={styles.big}>
                    <p style={{ float: 'left', fontSize: '12px', fontWeight: 600 }}>种植位</p>
                    <Input  value={this.state.site} onChange={this.onChangeSite} placeholder="请输入种植位" size='large'
                        style={{
                            width: '140px',
                            height: '32px',
                            marginLeft: 8,
                            fontSize: 12,
                        }} allowClear
                    />
                </div>
            {/* 属性输入框 */}
                <div className={styles.big}>
                    <p style={{ float: 'left', fontSize: '12px', fontWeight: 600 }}>属性</p>
                    <Input value={this.state.attr} onChange={this.onChangeAttr} placeholder="请输入属性" size='large'
                        style={{ width: '140px', height: '32px', marginLeft: '8px', fontSize: '12px' }}
                        allowClear/>
                </div>
            {/* 日历 */}
                {
                    this.props.tags?null:
                    <div className={styles.big}>
                      <RangePicker
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD HH:mm"
                        size='large'
                        value={this.state.time}
                        placeholder={['开始时间', '结束时间']}
                        onChange={this.onChangeTime}
                        onOk={this.onTimeOk}
                        />
                    </div>
                }
                
              
              <div className={styles.searchBtn} ><Button size='large' onClick={this.onSearch}>查询</Button></div>
              <div className={styles.clearBtn} ><Button size='large' onClick={this.empty}>清空查询</Button></div>
              {/* 导出 */}
              {
                  this.props.tags?<Button style={{ fontSize: 12, float: 'right' }} onClick={() => this.export('tags')}>导出</Button>:null
              }
              
          </div>
        )
    }
}
export default connect(({alert})=>(alert))(SearchBar)