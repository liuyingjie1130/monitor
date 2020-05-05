import styles from './index.less';
import {Card, Row, Col, Input,} from 'antd';
import Select from './components/Select.js';
import Charts from './components/Charts.js';
import Data from './components/Data.js';
import { Component } from 'react';
import {connect} from 'dva'

const { Search } = Input;
class His extends Component {
    render(){
        return (
            <div className={styles.normal}>
            {/* <div style={{margin:10}}>
                选择设备：
                <Search placeholder="input search text" onSearch={value => console.log(value)} style={{ width: 200 }} />
            </div> */}
            <div className="site-card-wrapper">
                <Row gutter={16}>
                <Col span={6}>
                    <Card bordered={false} style={{height:650}}>
                        <Select />
                    </Card>
                </Col>
                <Col span={18}>
                    <Card bordered={false}>
                        <Charts />     
                    </Card>
                    <Card bordered={false}>
                        <Data />     
                    </Card>
                </Col>
                </Row>
            </div>
          </div>
          );
    }

}
export default connect(({his})=>(his))(His)