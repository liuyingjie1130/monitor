// import {connect,routerRedux} from 'dva';
import React,{ Component} from 'react';
import { connect } from 'dva';
import { message,Popover,
    Form,
    Input,
    Checkbox,
    Button,
    Modal, } from 'antd';

class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
    };
  
    handleSubmit = e => {
      e.preventDefault();
      const {dispatch,form} = this.props
      form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          if(values.agreement){
            dispatch({
                type:'login/register',
                payload:{
                    user_name:values.user_name,
                    user_password:values.user_password
                }
            })
          }else{
              message.info('请先阅读并同意用户协议和隐私政策')
          }
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('user_password')) {
        callback('两次密码不一致!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
    handleCancel = () => {
        this.props.dispatch({
            type:'login/updateStates',
            payload:{
                registerVisible:false
            }
        })
    }
  
    render() {
      const { form,registerVisible } = this.props;
      const { getFieldDecorator } = form;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
  
      return (
        <Modal
          title="注册"
          visible={registerVisible}
          onCancel={this.handleCancel}
          footer={null}
        >
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="name">
                {getFieldDecorator('user_name', {
                rules: [
                    {
                    required: true,
                    message: '请输入用户名!',
                    },
                ],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
                {getFieldDecorator('user_password', {
                rules: [
                    {
                    required: true,
                    message: '请输入密码!',
                    },
                    {
                    validator: this.validateToNextPassword,
                    },
                ],
                })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
                {getFieldDecorator('confirm', {
                rules: [
                    {
                    required: true,
                    message: '请验证密码!',
                    },
                    {
                    validator: this.compareToFirstPassword,
                    },
                ],
                })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            
            <Form.Item {...tailFormItemLayout}>
                {getFieldDecorator('agreement', {
                valuePropName: 'checked',
                })(
                <Checkbox>
                    我已经阅读并同意 <Popover placement="right" title={<div style={{textAlign:'center'}}>用户协议</div>} content={<div>最终解释权由大杰子、照相机、陈蛋儿所有</div>} trigger="click">
                    <a >《用户协议》</a>
                    </Popover>
                </Checkbox>,
                )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                注册
                </Button>
            </Form.Item>
            </Form>
      
        </Modal>
        );
    }
  }
  
  const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
 export default connect(({login})=>(login))(WrappedRegistrationForm)