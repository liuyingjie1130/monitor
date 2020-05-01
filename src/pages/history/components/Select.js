import { Cascader, Checkbox} from 'antd';
import React from 'react';
import styles from './Select.less';
import {Input} from 'antd'

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

class Select extends React.Component{
    render(){
        const options1 = [
            {
              value: '苹果树',
              label: '苹果树',
              children: [
                {
                  value: '1',
                  label: '1',
                },
                {
                  value: '2',
                  label: '2',
                },
                {
                  value: '3',
                  label: '3',
                },
                {
                  value: '4',
                  label: '4',
                },
              ],
            },
            {
              value: '梨树',
              label: '梨树',
              children: [
                {
                  value: '1',
                  label: '1',
                },
                {
                  value: '2',
                  label: '2',
                },
                {
                  value: '3',
                  label: '3',
                },
              ],
            },
            {
              value: '玫瑰花',
              label: '玫瑰花',
              children: [
                {
                  value: '1',
                  label: '1',
                },
                {
                  value: '2',
                  label: '2',
                },
                {
                  value: '3',
                  label: '3',
                },
                {
                  value: '4',
                  label: '4',
                },
                {
                  value: '5',
                  label: '5',
                },
              ],
            },
        ] 
        const options2 = [
          { label: '温度', value: '温度' },
          { label: '光照强度', value: '光照强度' },
          { label: '湿度', value: '湿度' },
          { label: '氧气浓度', value: '氧气浓度' },
          { label: '二氧化碳浓度', value: '二氧化碳浓度' },
        ];  
        return(
          <div>
            <div>
              <Cascader options={options1} />
            </div>
            <div style={{marginTop:30}}>
              <Checkbox.Group options={options2} defaultValue={['温度']} onChange={onChange} style={{padding:10}}/>
            </div>
          </div>
        )
    }
}

export default Select
