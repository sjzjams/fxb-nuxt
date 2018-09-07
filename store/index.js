import Vue from 'vue'
import Vuex from 'vuex'
import { Message } from '../node_modules/element-ui';

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    counter: 0,
    authUser:null
  },
  actions: {
      Login({commit},{vm,username,password}) {
          let param=new URLSearchParams()
          param.append('username',username)
          param.append('password',password)
          vm.$axios({
              method:'post',
              url:'https://node-koa2-pggpllcgtl.now.sh/user/phone/login',
              param
          }).then(res=>{
              console.log(res.data)
              if (res.data.result === 'SUCCESS') {
                  
              }else {
                commit('SET_USER', 'data')
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
      Logout({commit},{vm}){
        commit('SET_USER', null)
      }
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