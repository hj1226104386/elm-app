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
    totolMoney: 0,
    allFoods: '', // 所有事物集合
    selectFoods: [] // 订单集合
  },
  actions: {},
  mutations: {
    currentTotalMoney (state, money) {
      state.totolMoney = money
    },
    resetSelectFoods (state, newFoods) { // 重置订单
      state.selectFoods = newFoods
    },
    clearSelectFodds (state) { // 清空购物车
      state.selectFoods = []
      state.totolMoney = 0
    },
    refreshAllFoods (state, allFoods) { // 更新所有食物(数据有改动)
      state.allFoods = allFoods
    }
  },
  getters: {}
})

export default store
