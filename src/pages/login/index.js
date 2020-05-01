// import {connect,routerRedux} from 'dva';
import { Component} from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Checkbox,Icon,message } from 'antd';
import bgImage from '../../assets/imgs/bg.jpg'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.less'
import WrappedRegistrationForm from './components/register'
import moment from 'moment';

class LoginForm extends Component {
   
    
    handleSubmit = e => {
        
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            // console.log('Received values of form: ', values);
            this.props.dispatch({
                type:'login/login',
                payload:{
                    user_name:values.user_name,
                    user_password:values.user_password
                }
            })
          }
        });
      };
    render(){
            
        const { form,dispatch } = this.props;
        const { getFieldDecorator } = form;
        return (
            <div className={styles.login} style={{width:'100%',height:'100%',background:`url(${bgImage}) `,
            backgroundSize:'cover',
            }}>
                <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
                    <Form.Item>
                    {getFieldDecorator('user_name', {
                        rules: [{ required: true, message: '用户名不能为空！' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="用户名"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('user_password', {
                        rules: [{ required: true, message: '密码不能为空!' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="密码"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住密码</Checkbox>)}
                    <a className={styles.loginFormForgot} onClick={()=>message.info('请联系管理员')}>
                        忘记密码
                    </a>
                    <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                        登录
                    </Button>
                    <a onClick={()=>dispatch({type:'login/updateStates',payload:{registerVisible:true}})}>马上注册</a>
                    </Form.Item>
                </Form>
                <WrappedRegistrationForm/>
            </div>
        );
    }
}
const Login = Form.create({ name: 'normal_login' })(LoginForm)
 export default connect(({login})=>(login))(Login)