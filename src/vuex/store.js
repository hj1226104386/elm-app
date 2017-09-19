/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/9/19
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 构造vuex实例
const store = new Vuex.Store({
  state: {
    title: '我来自vuex状态管理器',
    totolMoney: 0,
    selectFoods: [11, 222] // 选择的商品
  },
  actions: {},
  mutations: {
    changeTitle (state) {
      state.title = '啊哈哈，我把title改成这样了'
    },
    currentTotalMoney (state, money) {
      state.totolMoney = money
    }
  },
  getters: {}
})

export default store
