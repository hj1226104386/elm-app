<template>
  <div id="app">
    <v-header :header-data='headerData'></v-header>
    <ul class="links">
      <li>
        <router-link to='/goods'>商品</router-link>
      </li>
      <li>
        <router-link to='/ratings'>评价</router-link>
      </li>
      <li>
        <router-link to='/seller'>商家</router-link>
      </li>
    </ul>
    <router-view :header-data='headerData'></router-view>
    <v-cart :header-data='headerData'></v-cart>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import cart from './components/cart/cart.vue'

  export default {
    name: 'app',
    data () {
      return {
        headerData: ''
      }
    },
    // 定义子组件
    components: {
      'v-header': header,
      'v-cart': cart
    },
    created () {
      this.$http.get('/api/seller').then((res) => {
        if (res.body.errNum === 0) {
          // Object.assign();深拷贝
          this.headerData = Object.assign({}, res.body.data)
        }
      })
    }
  }

</script>

<style scoped>
  #app {
    height: 100%;
    margin: 0 auto;
  }

  .links {
    height: 40px;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    overflow: hidden;
  }

  .links > li {
    width: 33.333%;
    float: left;
    height: 100%;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    color: rgb(77, 85, 93);
  }

  .router-link-active {
    color: rgb(240, 20, 20);
  }
</style>
