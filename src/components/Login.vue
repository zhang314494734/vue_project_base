<template>
  <div class="page has-navbar" v-nav="{ title: '登录', showBackButton: false }">
    <div  v-if="weixin" >
      <div class="page-content padding-top">登录中...</div>
      <iframe src="http://www.wxapp.com/index.php/Merchant/ad/login.html" width="100%" height="100px" style="display:none" v-on:load="onload" > </iframe>

    </div>
    <div v-else class="page-content padding-top">

      <von-input type="text" v-model="username" placeholder="用户名" label="用户名"></von-input>
      <von-input type="password" v-model="password" placeholder="密码" label="密码" style="margin-bottom: 5px;" ></von-input>

      <div class="padding">
        <button class="button button-positive button-block">确认</button>
      </div>

    </div>
  </div>
  	
</template>
<script>
  import {isWeixin,onLoginSuccess} from '../common.js';
  export default {
  	data(){
  		return{
  			weixin:!isWeixin()
  		}
  	},
    methods: {
      onload(){
      	log('登录授权加载完成')
        setTimeout(()=>{
           $loading.hide();
          onLoginSuccess();
        },2000)
      }
    },
    created(){
      if (this.$data.weixin) {
        $loading.show("登录中...")
      }
      log('创建',this.$data.weixin);
    }
  }
</script>
