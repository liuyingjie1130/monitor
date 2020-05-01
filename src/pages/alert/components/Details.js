import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React from 'react';

class Details extends React.Component {
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
    return (
      <div>
        <Button type="ghost" onClick={this.showModal} style={{color:"black"}}>
          详情
        </Button>
        <Modal
          title="报警详细情况"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>位号名称：</p>
          <p>实测值：</p>
          <p>正常值：</p>
          <p>报警描述：</p>
          <p>开始时间：</p>
          <p>结束时间：</p>
          <p>持续时长：</p>
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
export default Details