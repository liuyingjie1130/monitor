import React from 'react';
import { Collapse ,Icon,Button,Select,Divider,message,Input,DatePicker,Cascader} from 'antd';
import styles from './Search.less';
import { connect } from 'dva';
import io from 'socket.io-client'

const {Option} = Select;
const { RangePicker } = DatePicker;
function SelectKind(){
    return(
        <div className={styles.big}>
            <p style={{ float: 'left', fontSize: '12px', fontWeight: 600 }}>品系</p>
            <Select  placeholder="请选择品系" showSearch size='large'
                    style={{ width: '140px', height: '32px', marginLeft: '8px', fontSize: '12px' }}
                    onChange={()=>console.log(111)} allowClear>
                <Option value="11">11</Option>
                <Option value="12">12</Option>
            </Select>
        </div>
    )
}
function InputNum(){
    return(
        <div className={styles.big}>
            <p style={{ float: 'left', fontSize: '12px', fontWeight: 600 }}>种植位</p>
            <Input  placeholder="请输入种植位" size='large'
                style={{
                    width: '140px',
                    height: '32px',
                    marginLeft: 8,
                    fontSize: 12,
                }} allowClear
            />
        </div>
    )
}
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            kind:undefined,
            num:'',
            attr:'',
            time:[],
            test:[]
        }
    }
    onChangeKind = (value)=>{
        console.log(value)
        this.setState({
            kind:value
        })
    }
    onChangeNum = (e)=>{
        this.setState({
            num:e.target.value
        })
    }
    onChangeAttr = (e)=>{
        this.setState({
            attr:e.target.value
        })
    }
    onChangeTime = (value, dateString)=> {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
        this.setState({
            time:value
        })
    }
    // 清空
    empty = ()=>{
        this.setState({
            kind:undefined,
            num:'',
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
        const kind = Boolean(this.state.kind)?this.state.kind:'*',
              num = Boolean(this.state.device)?this.state.num:'*',
              attr = Boolean(this.state.tag)?this.state.attr:'*',
              time = this.state.time;

        // 传给父组件的值 子传父
        this.props.parent({kind,num,attr,time})

        // 父组件传过来的函数  父传子
        this.props.onSearch();
    }
    onChange=(value, selectedOptions)=>{
        // console.log(value, selectedOptions);
        let searchValue = value.length?value[0]+'.'+value[1]:''
        this.props.dispatch({
            type:'current/updateStates',
            payload:{
                searchValue
            }
        })
        if(value.length){
            const socket = io('ws://localhost:3000')

          // 发送消息
          socket.emit('clientMsg', {searchValue:'温带季风植物.苹果一号'}, {})

          // 接收消息
          socket.on('serverMsg', res => {
            // console.log(res,9999999999)
            this.props.dispatch({
                type:"current/updateStates",
                payload:{
                   rt:res
                }
            })
           
          })
        }
        

      }
    filter = (inputValue, path)=>{
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }
    render(){
        const options = [
            {
              value: '温带季风植物',
              label: '温带季风植物',
              children: [
                {
                  value: '苹果一号',
                  label: '苹果一号',
                },
              ],
            },
            {
                value: '热带雨林植物',
                label: '热带雨林植物',
                children: [
                    {
                      value: '椰子林',
                      label: '椰子林',
                    },
                  ],
            },
            {
                value: '地中海植物',
                label: '地中海植物',
            },
            {
                value: '热带沙漠植物',
                label: '热带沙漠植物',
            },
            {
                value: '热带草原植物',
                label: '热带草原植物',
            },
            {
                value: '热带季风植物',
                label: '热带季风植物',
            },
          ];
          
         
          
        return(
            <div className={styles.search}>
            {/* 品系下拉框 */}
                {/* <div className={styles.big}>
                    <p style={{ float: 'left', fontSize: '12px', fontWeight: 600 }}>品系</p>
                    <Select  value={this.state.kind} onChange={this.onChangeKind} placeholder="请选择品系" showSearch size='large'
                            style={{ width: '140px', height: '32px', marginLeft: '8px', fontSize: '12px' }} allowClear>
                        <Option value="11">11</Option>
                        <Option value="12">12</Option>
                    </Select>
                </div> */}
            {/* 种植位输入框 */}
                {/* <div className={styles.big}>
                    <p style={{ float: 'left', fontSize: '12px', fontWeight: 600 }}>种植位</p>
                    <Input  value={this.state.num} onChange={this.onChangeNum} placeholder="请输入种植位" size='large'
                        style={{
                            width: '140px',
                            height: '32px',
                            marginLeft: 8,
                            fontSize: 12,
                        }} allowClear
                    />
                </div>
                <div className={styles.big}>
                    <p style={{ float: 'left', fontSize: '12px', fontWeight: 600 }}>属性</p>
                    <Input  value={this.state.num} onChange={this.onChangeNum} placeholder="请输入属性" size='large'
                        style={{
                            width: '140px',
                            height: '32px',
                            marginLeft: 8,
                            fontSize: 12,
                        }} allowClear
                    />
                </div>
                <div className={styles.searchBtn} ><Button size='large' onClick={this.onSearch}>查询</Button></div>
                <div className={styles.clearBtn} ><Button size='large' onClick={this.empty}>清空查询</Button></div> */}
                <Cascader
                    size="large"
                    options={options}
                    onChange={this.onChange}
                    placeholder="请选择种植位"
                    showSearch={{ filter:this.filter }}
                />
            </div>
        )
    }
}
export default connect(({current})=>(current))(Search)