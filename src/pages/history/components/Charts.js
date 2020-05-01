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
                    <Button danger style={{backgroundColor:"#8B0000",color:"#fff",marginLeft:10}}>查询</Button>
                    <Button style={{marginLeft:50}}>导出</Button>
                </div>
            </div>
        );
    }
}
export default connect(({his})=>(his))(Charts)