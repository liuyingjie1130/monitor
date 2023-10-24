# monitor
环境监测系统
#### 依赖说明

前端
---

**当前文档模板版本:** v0.1.0 

**文档编写人:** 赵芊伊

**文档创建时间:** 2020年02月15日

**文档最后更新时间:** 2020年02月15日


---

## 权限概述
> 待补充

## 项目结构

```
|--dist                 //webpack打包后生成的文件夹
|--node_modules         //项目的依赖所在的文件夹 
|--src                  //前端代码目录
|   |--assets       //静态资源存放路径
|   |--components       //公共组件存放路径
|       |--xx   //组件名称命名的文件夹
|           |--index.js      //组件逻辑内容
|           |--index.less // 组件对应的样式文件
|   |--layouts            //暂未完成
|       |--common.less     //全局公共工具样式类
|       |--Header.js // 网站布局头部组件
|       |--index.css // 网站布局全局样式
|       |--index.js //网站布局内容
|       |-- Sider.js //网站侧边导航栏组件内容
|   |--service          //异步请求服务  暂未完成
|       |--index.js     //接口内部逻辑生成
|       |--api.js       //接口配置文件
|   |--utils            //工具函数书写  暂未完成
|       |--tools.js      //工具函数
|       |--config.js  //前端静态配置内容
|       |--request.js  //请求接口逻辑 
|   |--models            //全局models存放路径
|   |--locals //本地化内容存放
|   |--pages //对应路由的组件模块文件夹
|       |--.umi //umi脚手架生成内容
|       |-- xxx // 模块文件夹名称，同时是路由一部分，具体命名以及文件夹命名方式见umi动态路由文档
|--theme.js          //antd主题文件
|--.umirc.js        //umi脚手架相关配置以及webpack配置内容
|--app.js               //服务器端入口文件
|--config.js            //服务器端配置文件
|--package.json
```

## 使用技术

> - 前端：
>   - `react.js` 轻量级的MVVM框架
>   - `dva` 状态管理等react框架集成
>   - `umi` umi脚手架管理
>   - `antd` 基于ract.js的UI组件库
>   
> - 后端：
>   - `Koa` 服务器端框架
>   - `koa-router` 后端路由
>
## 构建步骤

``` bash
# 从项目根目录进入前端项目所在目录
cd monitor

# 安装依赖
npm install

# 启动前端调试服务器
npm run start 

# 为产品环境进行构建
npm run build
# 启动前端服务器 未完成
node app.js

```

## Tips
尽量用yarn装包

