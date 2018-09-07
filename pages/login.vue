<template>
  <section class="container">
      <div class="form-group">
          <el-card>
          <el-form ref="loginForm" label-position="top" :model="formLogin">
            <el-form-item  prop="username">
              <el-input type="text" v-model="formLogin.username" placeholder="用户名">
                <i slot="prepend" class="fa fa-user-circle-o">用户名</i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="formLogin.password" placeholder="密码">
                <i slot="prepend" class="fa fa-keyboard-o">密  码</i>
              </el-input>
            </el-form-item>
            <el-button @click="submit" type="primary" class="button-login">登录</el-button>
          </el-form>
        </el-card>
      </div>
      
  </section>
</template>
  <script>
  /**
   * 了解vuex
   */
  import { mapState,mapActions } from 'vuex'
  
  export default {
      data(){
          return {
            // 表单
            formLogin: {
                username: 'admin',
                password: 'admin',
                code: 'v9am'
            }
          }

      },
      methods:{
        ...mapActions([
              'Login'
        ]),
        submit(){
            this.Login({
                vm:this,
                username:this.formLogin.username,
                password:this.formLogin.password
            })
        }
      }
  }
  </script>
  