import widthRouter from 'umi/withRouter'
import {routerRedux} from 'dva'
import {connect} from 'dva'
import React from 'react'
import './commen.less'
import styles from './index.less'
import { Layout, Menu, Icon,ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
import logo from '../assets/imgs/logo.png'

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
    // console.log(key,selectedKeys)
    dispatch(routerRedux.push({pathname: key}))
    dispatch({
      type: 'sider/updateStates',
      payload: {
        selectedKeys
      }
    })
  }
  render() {
    const {selectedKeys} = this.props
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
        name: '搜索',
        icon: 'search',
        link: '/Search'
      }
    ]
  
    return (
      <ConfigProvider locale={zhCN}>
      <Layout style={{height:'100%'}}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={styles.logo}>
            {!this.state.collapsed?<img src={logo} style={{width:'100%',height:'100%'}}/>:null}
          </div>
          <Menu theme="dark" mode="inline" 

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
          <Header style={{ padding: 0 }}>
            <Icon
              style={{fontSize:20,color:'#fff'}}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              // background: '#fff',
              minHeight: 280,
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










