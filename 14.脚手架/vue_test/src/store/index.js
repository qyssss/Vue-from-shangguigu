// 该文件用于创建 vuex 中最为核心的 store
import Vue from 'vue'
// 引入 vuex
import Vuex from 'vuex'
import countOptions from './count';
import personOptions from './person';

// 使用 Vuex (需要在创建 store 之前使用,所以放这里)
Vue.use(Vuex)

// 创建并且导出store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})
