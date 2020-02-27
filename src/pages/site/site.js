import styles from './site.less';
// import {connect,routerRedux} from 'dva';
import { Component} from 'react';
import { connect } from 'dva';
import { Spin, Button, Icon, Card, Input,Modal,Row,Col,Select } from 'antd';
import Search from 'antd/lib/input/Search';

const { Option } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}
class Searchbox extends Component {
    constructor(props) {
        super(props)
        this.state={
            
        }
    }
    onChange = (e) =>{
        this.props.dispatch({
            type:"template/updateStates",
            payload:{
                searchValue:e.target.value
            }
        })
    }
    onSearch = (value) =>{
        console.log(value)
        this.props.dispatch({
            type:"template/getAllDrivers",
            payload:{
                index:1
            }
        })
    }

    render(){  
        const {searchValue} =this.props;
        console.log(searchValue)
        return(
            //搜索框
            <div classNames={styles.line}>
                <span>
                    品系：
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </span>
                <span>
                    编号:
                    {/* <SearchInput placeholder="input search text" style={{ width: 200 }} /> */}
                </span>
            </div>
        )
    }
}
export default connect(({template})=>(template))(Searchbox)  