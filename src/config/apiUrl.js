// const apiUrl = 'http://localhost:7001/admin/';
// const apiUrl = 'http://jsv5.tk:7001/admin/'

const apiUrl =  '';
if (process.env.NODE_ENV == 'development') {
  apiUrl = 'http://127.0.0.1:7001/default/'
} else if (process.env.NODE_ENV == 'production') {
  apiUrl = 'http://101.200.153.19:7001/default/'
}

export const servicePath = {
  checkLogin: apiUrl+'checkLogin', //  登录接口
  getTypeInfo: apiUrl+'getTypeInfo', //  获取文章分类
  addArticle: apiUrl+'addArticle' , //  添加文章
  updateArticle: apiUrl+'updateArticle',  //  更新文章
  getArticleList: apiUrl+'getArticleList' , //  获取文章列表
  delArticle: apiUrl+'delArticle/'  ,// 删除文章
  getArticleById: apiUrl+'getArticleById/',//修改文章
  getArticleComment: apiUrl+'getArticleComment', //获取全部
  upPassComment: apiUrl+'upPassComment', //审核留言
  signOut: apiUrl+'signOut'
} 