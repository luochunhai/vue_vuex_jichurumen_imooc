import {createStore} from 'vuex'

export default createStore({
    state: {
        count: 0
    },
    mutations: {
        incrementCount(state) {
            state.count++
        }
    },
    actions: {},
    modules: {}
})
