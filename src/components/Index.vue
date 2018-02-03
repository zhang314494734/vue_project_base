<template>
  <div class="page has-navbar" v-nav="{ title: 'Home' }">
    <div class="page-content text-center">
      <h2 class="padding" v-text="msg"></h2>
      
      <router-link class="button button-assertive" to="/about">
        <i class="ion-information-circled"></i> About
      </router-link>
      <button class="button button-assertive"  @click="increment">+</button>
      <md-button class="button button-balanced button-block" @click="increment">
        添加
      </md-button>
      <von-input type="text" v-model="msg" placeholder="用户名" label="用户名"></von-input>
      <div id="oval1"></div>
      <div id="oval"></div>
       <cells class="cells-33" :items="entrances" :on-cell-click="onCellClick"></cells>

     
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'


    
  export default {
    data () {
      return {
        msg: 'Hello! Vonic.',
        icons: [
          'ion-android-arrow-up',
          'ion-android-arrow-down',
          'ion-android-arrow-back',
          'ion-android-arrow-forward',

          'ion-ios-arrow-up',
          'ion-ios-arrow-down',
          'ion-ios-arrow-left',
          'ion-ios-arrow-right',

          'ion-ios-arrow-thin-up',
          'ion-ios-arrow-thin-down',
          'ion-ios-arrow-thin-left',
          'ion-ios-arrow-thin-right',

          'ion-android-arrow-up',
          'ion-android-arrow-down',
          'ion-android-arrow-back',
          'ion-android-arrow-forward',
        ],

        entrances: [
          '<div class="entrance assertive"><i class="icon ion-ios-flame"></i><br><span>热门</span></div>',
          '<div class="entrance energized"><i class="icon ion-ios-star"></i><br><span>好评</span></div>',
          '<div class="entrance balanced"><i class="icon ion-ios-location"></i><br><span>附近</span></div>',
          '<div class="entrance positive"><i class="icon ion-ios-search"></i><br><span>搜索</span></div>',
          '<div class="entrance positive"><i class="icon ion-ios-search"></i><br><span>搜索</span></div>',

          '<div class="entrance positive"><i class="icon ion-ios-search"></i><br><span>搜索</span></div>',
          '<div class="entrance positive"><i class="icon ion-ios-search"></i><br><span>搜索</span></div>',
          '<div class="entrance positive"><i class="icon ion-ios-search"></i><br><span>搜索</span></div>',
          '<div class="entrance positive"><i class="icon ion-ios-search"></i><br><span>搜索</span></div>',
        ]
      }
    },
    methods:{

      getIcon(iconName, color) {
        return '<i class="' + iconName + '"></i>'
      },
      getItems(n) {
        let items = []
        for (let i = 0; i < n; i++) {
          items.push(this.getIcon(this.icons[i]))
        }
        return items
      },
      onload(){
        console.log('AAAAA');
        setTimeout(() => {
          $loading.hide()
        }, 5000)
      }
    } 
  }
</script>
<style>
  h2 {
    font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
    color: #888;
  }
#oval {
    width: 100%;
    height: 80px;
    background: red;
    -moz-border-radius: 100px / 50px;
    -webkit-border-radius: 100px / 50px;
    border-radius: 10px 10px 80% 80% / 0px 0px 130% 130%;
    box-shadow: 0px 3px 0px -1px rgba(0,0,0,0.2);
}

#oval1{
  width: 100%;
    height: 20px;
    background: red;
}
  .page.has-navbar .page-content {
    padding-top: 100px;
  }
   .entrance {
    padding: 10px 0;

    .icon {
      font-size: 30px;
      line-height: 30px;
      width: 30px;
      height: 30px;
      margin-bottom: 6px;
    }

    span {
      font-size: 14px;
      line-height: 14px;
    }

  }

  .cells.cells-44 > .row > .col {
    padding: 20px 0;
  }

  .cells-33 > .row > .col {
    padding: 10px 0;
  }

  .cells-22 > .row > .col {
    padding: 20px 0;
  }

</style>
