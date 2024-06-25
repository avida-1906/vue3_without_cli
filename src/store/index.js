// import { createApp } from 'vue'
import { createStore  } from 'vuex'

const store = createStore({
    state: ()=> ({
        isShow: false
    }),
    
    mutations: {
        changeIsShow( state, payload ) {
            state.isShow = payload;
        }
    }
})

export default store;
