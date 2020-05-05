import { Cascader, Checkbox} from 'antd';
import React from 'react';
import {connect} from 'dva'
import styles from './Select.less';
import {Input} from 'antd'

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

class Select extends React.Component{
  constructor(props){
    super(props)
    this.state={
      search:''
    }
  }
  onChange=(val)=>{
    this.setState({
      search:val
    })
  }
  onChangeAttr=(attr)=>{
    console.log(attr)
    this.props.dispatch({
      type:'his/updateStates',
      payload:{attr:attr
      }
    })
  }
    render(){
      const options1 = [
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
        const options2 = [
          { label: '温度', value: '温度' },
          // { label: '光照强度', value: '光照强度' },
          { label: '湿度', value: '湿度' },
          // { label: '氧气浓度', value: '氧气浓度' },
          // { label: '二氧化碳浓度', value: '二氧化碳浓度' },
        ];  
        return(
          <div>
            <div>
              <Cascader options={options1} onChange={this.onChange}/>
            </div>
            <div style={{marginTop:30}}>
              {
                this.state.search?<Checkbox.Group options={options2}  onChange={this.onChangeAttr} style={{padding:10}}/>:null
                }
            </div>
          </div>
        )
    }
}

export default connect(({his})=>(his))(Select)