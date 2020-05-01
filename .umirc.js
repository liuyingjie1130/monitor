import darkTheme from '@ant-design/dark-theme';
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  "theme": darkTheme,
  routes: [
    { path: "/login", component: "../pages/login" },
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/current' },
        { path: '/404', component: '../pages/404' },
        { path: '/tags', component: '../pages/tags' },
        { path: '/template', component: '../pages/template' },
        { path: '/current', component: '../pages/current' },
        { path: '/history', component: '../pages/history' },
        { path: '/site', component: '../pages/site' },
        { path: '/alert', component: '../pages/alert' }
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
