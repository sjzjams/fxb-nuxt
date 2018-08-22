export default function (context) {
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent

  const { userAgent, route, redirect } = context
  console.log("userAgent: "+userAgent)
  console.log("rout.path: "+route.path)
//   if (userAgent.indexOf('Mobile') > -1) {
//     if (route.path === '/') {
//       redirect('/m')
//     } else if (route.path.indexOf('/m/') === -1 && route.path !== '/m') {
//       redirect(`/m${route.fullPath}`)
//     }
//   }

//   if (userAgent.indexOf('Mobile') === -1) {
//     if (route.path === '/m') {
//       redirect('/')
//     } else if (route.path.indexOf('/m/') > -1) {
//       redirect(route.fullPath.slice(2))
//     }
//   }
}
