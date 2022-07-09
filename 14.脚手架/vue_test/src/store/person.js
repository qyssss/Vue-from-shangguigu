import axios from "axios"
import { nanoid } from "nanoid"

// 人员管理功能相关配置
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, val) {
            if (val.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', val)
            }
            else {
                alert('需要添加姓王的')
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: response.data })
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, val) {
            state.personList.unshift(val)
        }
    },
    state: {
        personList: [{ id: '001', name: 'sqy' }, { id: '002', name: 'qqwy' }]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    },
}