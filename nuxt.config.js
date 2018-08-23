module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '峰向标',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#409EFF' },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/component-cache'
  ],
  router: {
    middleware: 'redirect'
  },
  axios: {
    baseURL: 'https://node-koa2-pggpllcgtl.now.sh',
    credentials: false,
    proxyHeaders: false
  },
  plugins: [
    /*'~plugins/muse-ui.js',引用muse-ui框架*/ 
   '~plugins/element-ui.js',/*引用element-ui */
     /*'~plugins/iview-ui.js',/*引用element-ui */
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    babel: {
      plugins: [
        ['component', {
          libraryName: 'element-ui',
          styleLibraryName: 'theme-chalk'
        }]
      ]
    }
    // extend(config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
