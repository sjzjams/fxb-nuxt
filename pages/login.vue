<template>
  <section class="container">
      <div class="viewport login-bg" style="margin: 0;">
		  <div class="blue-bg" style="background: none;">
		  	<p class="title-bg"><a id="back" style="width:54px;height:54px;display:inline-block;position: absolute;top: 0;left: 0;"><i class="icon-nav icon-nav-back icon-nav-back-top"> </i></a></p>
		  </div>
		  <div class="list-panel-box row">
		    <ul class="ui-form-item">
		      <li>
		        <input class="ui-input ui-input_rem border-none" required type="text" name="userAccount"  placeholder="请输入手机号" maxlength="11">
		        <i style="display: none" id="rem_but" class="ui-input-clear"> </i></li>
		      <li>
		        <input class="ui-input border-none " required name="password"  type="password"  placeholder="请输入密码" autocomplete="off" maxlength="20">
		        </li>
              <li id="randCode" style="display: none">
                 <input class="ui-input border-none" required type="text" name="userAccount"  placeholder="请输入图形验证码" maxlength="11">
                 <i class="ui-code"><img src="" alt="" id="changeImg"></i> </li>
		      <a class="wrong_password">忘记密码？</a>
		    </ul>
		    <a class="ui-btn login-btn clear" id="login">登 录</a>
		    <div class="once">还没有账户？<a >去注册</a></div>
		  </div>
		</div>    	
  </section>
</template>
  