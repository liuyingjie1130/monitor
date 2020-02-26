import React,{ Component } from 'react';
import { Collapse ,Icon} from 'antd';
import styles from './index.less';
import SearchBar from './SearchBar.js'
const { Panel } = Collapse;
const customPanelStyle = {
    borderRadius: 4,
    border: 0,
    overflow: 'hidden',
  };
class CollapsePanel extends Component{
    render(){
        return(
            <Collapse
                className={styles.coll}
                bordered={false}
                defaultActiveKey={['1']}
                expandIconPosition={'right'}
                expandIcon={({ isActive }) =>{
                return <div style={{right:"1.39%"}}>
                            {<span className={styles.Openup}>{isActive?'收起':'打开'}</span>}
                            <Icon type="caret-right" rotate={isActive ? -90 : 90} className={styles.Arrow} />
                        </div> 
                }}
                >
                <Panel header='高级搜索' key="1" style={customPanelStyle} >
                    {/* {this.props.content} */}
                    <SearchBar tags={this.props.tags} onSearch={this.props.onSearch} parent={this.props.parent}/>
                </Panel>
            </Collapse>
        )
    }
}

export default CollapsePanel 