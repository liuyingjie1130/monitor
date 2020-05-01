import { Component} from 'react';
import { connect } from 'dva';
import styles from './index.less';


import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class Finsh extends Component{
    constructor(props) {
        super(props)
        this.state={        
        }
    }
    //  搜索框输入 
    onChange = (e) =>{
        this.props.dispatch({
            type:"search/updateStates",
            payload:{
                searchValue:e.target.value
            }
        })
        console.log(e);
     }
    //  搜索
    onSearch = (value) =>{
        // console.log(value)
        this.props.dispatch({
            type:"search/getAllDrivers",
            payload:{
                index:1
            }
        })
    }

    render(){
        return(
            <div>
                <span>品种：</span>
                <Select defaultValue="苹果1" style={{ width: 120 }} onChange={handleChange}>
                <Option value="苹果1">苹果1</Option>
                <Option value="苹果2">苹果2</Option>
                <Option value="苹果3">苹果3</Option>
                <Option value="苹果4">苹果4</Option>
                </Select>
            </div>
        )
    }
}
export default connect(({search})=>(search))(Finsh)