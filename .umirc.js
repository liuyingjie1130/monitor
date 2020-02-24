import darkTheme from '@ant-design/dark-theme';
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  "theme": darkTheme,
  routes: [
    {
      path: '/',
      component: '../pages/current/current.js',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/404', component: '../pages/404' },
        { path: '/tags', component: '../pages/tags' },
        { path:'/current',component:'../pages/current'},
        { path:'/site',component:'../pages/site'},
        { path:'edit-site',component:'../pages/edit-site'}
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'monitorFe',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
