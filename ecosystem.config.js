module.exports = {
  apps: [
    {
      name: 'my-vitevue-app', // 项目名称
      script: 'vue3-admin-server.js' // 要执行的脚本，也就是我们上文中利用 pushstate-server 工具执行 dist 目录内容的脚本。
    },
  ],
  deploy: {
    production: {
      user: 'root', // 通过root权限进入服务器
      host: '120.26.194.116', // 服务器ip地址
      ref: 'origin/master', // 要拉取代码的分支
      repo: 'git@github.com:W-LikeStar/my-vitevue-app.git', // 代码仓库地址，我存放的是 Github
      path: '/workspace/vue3-admin', // 拉取代码后，存放在服务器的文件地址。
      'post-deploy': 'git reset --hard && git checkout main && git pull && npm i --production=false && npm run build:release && pm2 startOrReload ecosystem.config.js', // 顺序执行这些指令，最后 pm2 startOrReload ecosystem.config.js 会通过 pm2 启动 vue3-admin-server.js
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}
