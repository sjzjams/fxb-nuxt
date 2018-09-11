
export default function ({store,error}) {
  //TODO刷新页面store消失，需要存到LocalStorage
  if (!store.state.authUser) {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}
