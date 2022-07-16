// 该文件用于创建 vuex 中最为核心的 store
import Vue from 'vue'
// 引入 vuex
import Vuex from 'vuex'
// 使用 Vuex (需要在创建 store 之前使用,所以放这里)
Vue.use(Vuex)

// 准备 actions 用于响应组件中的动作
const actions = {
    /* jia(context, val) {
        context.commit('JIA', val)
    },
    jian(context, val) {
        context.commit('JIAN', val)
    }, */
    jiaOdd(context, val) {
        if (context.state.sum % 2) {
            context.commit('JIA', val)
        }
    },
    jiaWait(context, val) {
        setTimeout(() => {
            context.commit('JIA', val)
        }, 500);
    },
}

// 准备 mutations 用于操作数据(state)
const mutations = {
    JIA(state, val) {
        state.sum += val
    },
    JIAN(state, val) {
        state.sum -= val
    },
}

// 准备 state 用于存储数据
const state = {
    sum: 0, // 当前和
}

// 创建并且导出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})
