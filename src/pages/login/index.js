// import {connect,routerRedux} from 'dva';
import { Component} from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Checkbox,Icon } from 'antd';
import bgImage from '../../assets/imgs/bg.jpg'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.less'
import moment from 'moment';

class LoginForm extends Component {
   
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    render(){
            
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.login} style={{width:'100%',height:'100%',background:`url(${bgImage}) `,
            backgroundSize:'cover',
            }}>
                <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
                    <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '用户名不能为空！' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '密码不能为空!' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住密码</Checkbox>)}
                    <a className={styles.loginFormForgot} href="">
                        忘记密码
                    </a>
                    <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                        登录
                    </Button>
                    <a href="">马上注册</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
const Login = Form.create({ name: 'normal_login' })(LoginForm)
 export default connect(({login})=>(login))(Login)