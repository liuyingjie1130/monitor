import { Component} from 'react';
import { connect } from 'dva';
import { DatePicker,Select, Input,Button} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styles from './Charts.less';

const { RangePicker } = DatePicker;
const { Option } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}

class Charts extends Component {
    search = ()=>{
        this.props.dispatch({
            type:'his/updateStates',
            payload:{
                data:[
                    {
                        month: "00:00",
                        city: "温度",
                        temperature: 7
                    },
                    {
                        month: "00:00",
                        city: "湿度",
                        temperature: 3.9
                    },
                    {
                        month: "01:00",
                        city: "温度",
                        temperature: 6.9
                    },
                    {
                        month: "01:00",
                        city: "湿度",
                        temperature: 4.2
                    },
                    {
                        month: "02:00",
                        city: "温度",
                        temperature: 9.5
                    },
                    {
                        month: "02:00",
                        city: "湿度",
                        temperature: 5.7
                    },
                    {
                        month: "04:00",
                        city: "温度",
                        temperature: 14.5
                    },
                    {
                        month: "04:00",
                        city: "湿度",
                        temperature: 8.5
                    },
                    {
                        month: "05:00",
                        city: "温度",
                        temperature: 18.4
                    },
                    {
                        month: "05:00",
                        city: "湿度",
                        temperature: 11.9
                    },
                    {
                        month: "06:00",
                        city: "温度",
                        temperature: 31.5
                    },
                    {
                        month: "06:00",
                        city: "湿度",
                        temperature: 15.2
                    },
                    {
                        month: "07:00",
                        city: "温度",
                        temperature: 25.2
                    },
                    {
                        month: "07:00",
                        city: "湿度",
                        temperature: 17
                    },
                    {
                        month: "08:00",
                        city: "温度",
                        temperature: 26.5
                    },
                    {
                        month: "08:00",
                        city: "湿度",
                        temperature: 16.6
                    },
                    {
                        month: "09:00",
                        city: "温度",
                        temperature: 27.3
                    },
                    {
                        month: "09:00",
                        city: "湿度",
                        temperature: 14.2
                    },
                    {
                        month: "10:00",
                        city: "温度",
                        temperature: 18.3
                    },
                    {
                        month: "10:00",
                        city: "湿度",
                        temperature: 10.3
                    },
                    {
                        month: "11:00",
                        city: "温度",
                        temperature: 13.9
                    },
                    {
                        month: "11:00",
                        city: "湿度",
                        temperature: 6.6
                    },
                    {
                        month: "12:00",
                        city: "温度",
                        temperature: 19.6
                    },
                    {
                        month: "12:00",
                        city: "湿度",
                        temperature: 4.8
                    }
                  ]
            }
        })
    }
    render(){
        return(
            <div className={styles.right}>
                <div>
                    <RangePicker />
                    <span style={{marginLeft:5}}>步长：</span>
                    <Input type="number" style={{width:80}}/>
                    <Select defaultValue="时" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="秒">秒</Option>
                        <Option value="分">分</Option>
                        <Option value="时">时</Option>
                    </Select>
                    <Button type="danger" style={{backgroundColor:"#8B0000",color:"#fff",marginLeft:10}} onClick={this.search}>查询</Button>
                    {/* <Button style={{marginLeft:50}}>导出</Button> */}
                </div>
            </div>
        );
    }
}
export default connect(({his})=>(his))(Charts)