import { Component} from 'react';
import { connect } from 'dva';
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React from 'react';

class Details extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() { 
    const {item}=this.props
    console.log(item);
    return (
      <div>
        <span onClick={this.showModal} style={{color:"white",width:40}}>详情</span>
        <Modal
          title="报警详细情况"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>位号名称：{item.name}</p>
          <p>实测值：{item.value}</p>
          <p>正常值：{item.min}~{item.max}{item.unit}</p>
          <p>报警描述：{item.attr}的值超出正常范围</p>
        </Modal>
      </div>
    );
  }
}

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    icon: <ExclamationCircleOutlined />,
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
  });
}
export default connect(({alert})=>(alert))(Details)