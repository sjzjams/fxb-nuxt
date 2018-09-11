import Vue from 'vue'
import Vuex from 'vuex'
import util from '@/libs/util.js'
import { Message } from '../node_modules/element-ui';

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    counter: 0,
    authUser:null
  },
  actions: {
      Login({commit},{vm,userAccount,password}) {
          vm.$axios({
              method:'post',
              url:'https://node-koa2-pggpllcgtl.now.sh/user/phone/login?userAccount='+userAccount+'&password='+password,
          }).then(res=>{
              console.log(res.data)
              if (res.data.result === 'SUCCESS') {
                util.cookies.set('uuid', res.data.authInfo.user.userId)
                util.cookies.set('token', res.data.token)
                //刷新页面store消失，需要存到LocalStorage
                commit('SET_USER', res.data.authInfo.user)
                // 跳转路由
                vm.$router.push({
                name: 'userCenter'
              })
              }else {
                //commit('SET_USER', 'data')
                //util.cookies.set('err', res.data.message)
                Message({
                    showClose: true,
                    message: res.data.message,
                    type: 'warning'
                  })
                
              }
          }).catch(err=>{
              console.log('err',err)
          })
      },
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    SET_USER(state,user){
        state.authUser = user
    }
  }
})

export default store