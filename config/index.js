//config存放环境变量相关的路径参数，以及一些配置选项，如图片上传接口等。

export default {
  development: {
    baseUrl: '/api' // 开发代理地址
  },
  beta: {
    baseUrl: '//backend-api-02.newbee.ltd/manage-api/v1' // 测试接口域名
  },
  release: {
    baseUrl: '//backend-api-02.newbee.ltd/manage-api/v1' // 正式接口域名
  }
}

//分别配置相应环境的域名地址。开发环境配置 /api，是为了后续配置 proxy 代理接口所用，下面我们就要讲解这块内容。