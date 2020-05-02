import widthRouter from 'umi/withRouter'
import {routerRedux} from 'dva'
import {connect} from 'dva'
import React from 'react'
import './commen.less'
import styles from './index.less'
import { Layout, Menu, Icon,ConfigProvider,Dropdown,message } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
import logo1 from '../assets/imgs/logoBig.png'
import logo2 from '../assets/imgs/logoSmall.png'

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,

  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  //Menu选中
  onMenuSelected = ({item, key, keyPath, selectedKeys, domEvent  })=>{
    const {dispatch} = this.props
  
    dispatch(routerRedux.push({pathname: key}))
    dispatch({
      type: 'sider/updateStates',
      payload: {
        selectedKeys
      }
    })
  }
  changePassword = ()=>{
    message.info('请联系管理员')
  }
  logout = ()=>{
    console.log('logout')
    this.props.dispatch(routerRedux.push('/login'))
  }
  render() {
    const {selectedKeys,dispatch} = this.props
    const menu = [
      {
        name: '模板管理',
        icon: 'home',
        link: '/template'
      },
      {
        name: '位号浏览',
        icon: 'deployment-unit',
        link: '/tags'
      },
      {
        name: '实时监控',
        icon: 'clock-circle',
        link: '/current'
      },
      {
        name: '种植位管理',
        icon: 'flag',
        link: '/site'
      },
      {
        name: '历史监控',
        icon: 'fast-backward',
        link: '/history'
      },
      {
        name: '报警管理',
        icon: 'alert',
        link: '/alert'
      }
    ]
    const menuHeader = (
      <Menu>
        <Menu.Item key="setting:1"><span>{'你好'+window.localStorage.getItem('user_name')}</span></Menu.Item>
        <Menu.Item key="setting:2"  onClick={this.changePassword}><Icon type="user" />修改密码</Menu.Item>
        <Menu.Item key="logout" onClick={this.logout}><span ><Icon type="logout" />退出登录</span></Menu.Item>
      </Menu>
    )
    return (
      <ConfigProvider locale={zhCN}>
      <Layout style={{height:'100%'}}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={styles.logo}>
            {!this.state.collapsed?<img src={logo1} style={{width:'100%',height:'100%'}}/>:<img src={logo2} style={{width:'100%',height:'120%'}}/>}
          </div>
          <Menu theme="dark" mode="inline" 

            defaultSelectedKeys={['/current']}
            selectedKeys={selectedKeys}
            onSelect={this.onMenuSelected}>
            {menu.map((item)=>{
              return(<Menu.Item key={item.link}>
              <Icon type={item.icon}/>
              <span>{item.name}</span>
            </Menu.Item>)
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ paddingLeft:0,paddingRight: 40,display:'flex',justifyContent:'space-between',alignItems:'center' }}>
            <Icon
              style={{fontSize:20,color:'#fff'}}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Dropdown overlay={menuHeader} placement="bottomCenter">
              <img src={require('../assets/imgs/user.png')} style={{width:35,height:35,cursor:'pointer'}}/>
            </Dropdown>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              // background: '#fff',
              minHeight: 380,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
      </ConfigProvider>
    );
  }
}

export default widthRouter(connect(({sider}) => (sider))(SiderDemo));










