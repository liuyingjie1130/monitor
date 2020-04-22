import {connect} from 'dva';
import {Component} from 'react';
import { Modal, Button,Form ,Select,Input, } from 'antd';
import styles from './ModalTemplate.less';
import EditTable from './EditTable';
// import validator from 'validator';
const {Option}=Select;
class ModalTemplate extends Component{
  constructor(props){
    super(props);
  }
// 提交
  handleOk = (e) => {
    e.preventDefault();
    const { tableData } = this.props;

    function duplicate(arr){//判断数组是否有重复元素
      let array = [];
      arr.forEach(item=>array.push(item.name));
      console.log(array)
      let newArr = [...new Set(array)];
      return !(newArr.length == array.length)
    }
    console.log(duplicate(tableData))
    if(duplicate(tableData)){//如果重复提示错误
      Modal.error({
        title: '属性名称不能重复！',
      });
    }else{
      let valuesTag={};
      this.props.form.validateFields((err, values) => {
      if (!err) {
        valuesTag={...values};
        console.log(valuesTag,'valuesTag')
        console.log(tableData)
        this.handleCancel();
      }
    });
    }
    // console.log(tableData,'tableData')
  };

// 取消
  handleCancel = () => {
    this.props.dispatch({
      type:"template/updateStates",
      payload:{
        visible:false,
      }
    });
  };
      
render(){
  const { getFieldDecorator } = this.props.form;
  const { visible,flag} = this.props;
  const title= flag==="edit"?'编辑模板':'添加模板'
  const footer=<div>    
    <Button onClick={this.handleOk} type="danger">完 成</Button>
    <Button onClick={this.handleCancel}>取 消</Button>
    </div>
  return (
    <div>
      <Modal
        // className={styles.modal}
        width={900}
        title={title}
        visible={visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        destroyOnClose={true}//关闭时销毁 Modal 里的子元素
        centered
        footer={footer}
      >
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} hideRequiredMark={false}>
          <Form.Item label="模板名称" style={{paddingLeft: '70px'}}>
            {getFieldDecorator('name', {
            //   initialValue:template.name,
          rules: [{ required: true, message: '请输入模板名称' }],
            })(<Input placeholder="请输入模板名称" />)}
          </Form.Item>
          <Form.Item label="模板描述" style={{paddingLeft: '70px'}}>
            {getFieldDecorator('description', {
              // initialValue:template.description,
            })(<Input placeholder="请输入描述"/>)}
          </Form.Item>
          <EditTable/>
        </Form>
      </Modal>
    </div>
  );

}


}

const ModalDrawer=Form.create()(ModalTemplate)
export default connect(({template})=>(template))(ModalDrawer);