import util from '@/libs/util.js'
export default function (context) {
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent

  const { userAgent, route, redirect } = context
  console.log("userAgent: "+userAgent)
  console.log("rout.path: "+route.path)
  if (userAgent.indexOf('Mobile') > -1) {
    if (route.path === '/') {
      redirect('/m')
    } else if (route.path.indexOf('/m/') === -1 && route.path !== '/m') {
      redirect(`/m${route.fullPath}`)
    }
  }

  if (userAgent.indexOf('Mobile') === -1) {
    if (route.path === '/m') {
      redirect('/')
    } else if (route.path.indexOf('/m/') > -1) {
      redirect(route.fullPath.slice(2))
    }
  }
//TODO 需要判断如果是usercenter文件夹下都需要判断是否有token，可以在nuxt.config.js配置过滤器
  // router.beforeEach((to, from, next) => {
  //   // 验证当前路由所有的匹配中是否需要有登陆验证的
  //   if (to.matched.some(r => r.meta.requiresAuth)) {
  //     // 这里暂时将cookie里是否存有token作为验证是否登陆的条件
  //     // 请根据自身业务需要修改
  //     const token = util.cookies.get('token')
  //     if (token && token !== 'undefined') {
  //       next()
  //     } else {
  //       // 没有登陆的时候跳转到登陆界面
  //       next({
  //         name: 'login'
  //       })
  //     }
  //   } else {
  //     // 不需要身份校验 直接通过
  //     next()
  //   }
  // })
}
