import React from 'react';
import { Collapse ,Icon,Button,Select,Divider,message,Input,DatePicker} from 'antd';
import styles from './SearchBar.less';
import toExcel from '../../utils/toExcel.js'

const {Option} = Select;
const { RangePicker } = DatePicker;
function SelectKind(){
    return(
        <div className={styles.big}>
            <p style={{ float: 'left', fontSize: '12px', fontWeight: 600 }}>品系</p>
            <Select  placeholder="请选择品系" showSearch size='large'
                    style={{ width: '140px', height: '32px', marginLeft: '8px', fontSize: '12px' }}
                    onChange={()=>console.log(111)} allowClear>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
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
function InputAttr(){
    return(
        <div className={styles.big}>
            <p style={{ float: 'left', fontSize: '12px', fontWeight: 600 }}>属性</p>
            <Input  placeholder="请输入属性" size='large'
                style={{ width: '140px', height: '32px', marginLeft: '8px', fontSize: '12px' }}
                 allowClear/>
        </div>
    )
}
class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            kind:undefined,
            num:'',
            attr:'',
            time:[]
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
    // 导出
    export = async (e) => {
        console.log("export")
        // const site = Boolean(this.state.site)?this.state.site:'*',
        //       device = Boolean(this.state.device)?this.state.device:'*',
        //       tag = Boolean(this.state.tag)?this.state.tag:'*';
        // await this.props.dispatch({
        //     type:'tags/getTagsNopages',
        //     payload:{
        //         query:{
        //             key:`${site}.${device}.${tag}`
        //         }
        //     }
        // })

        // const filterVal = ["index","name","description","min","max","unit"];
        // const th = ["序号","位号名称","描述","下限","上限","计量单位"];
        // const data = formatJson(filterVal, this.props.tagsNopages);
        // function formatJson(filterVal, jsonData){
        //     return jsonData.map(v => filterVal.map(j => v[j]))
        // }
        // toExcel({th: th, data, fileType:"xlsx",fileName:"位号浏览"})
    }
    render(){
        return(
            <div className={styles.search}>

            {/* 品系下拉框 */}
                <div className={styles.big}>
                    <p style={{ float: 'left', fontSize: '12px', fontWeight: 600 }}>品系</p>
                    <Select  value={this.state.kind} onChange={this.onChangeKind} placeholder="请选择品系" showSearch size='large'
                            style={{ width: '140px', height: '32px', marginLeft: '8px', fontSize: '12px' }} allowClear>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                    </Select>
                </div>
            {/* 种植位输入框 */}
                <div className={styles.big}>
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
export default SearchBar