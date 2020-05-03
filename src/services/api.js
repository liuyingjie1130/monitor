export default {
    // 登陆接口
    login:'POST api/v1/login',
    register:'POST api/v1/register',
    // 模板接口
    getTemplates:'GET api/v1/template/list',
    getTemplateDetail:'GET api/v1/template/list/:id',
    getTemplateTags:'GET api/v1/template/param/list/:id',//获取模板下的属性
    addTemplate:'POST api/v1/template/add',//
    deleteTemplate:'POST api/v1/template/delete',//
    updateTemplate:'POST api/v1/template/update',//
  }
