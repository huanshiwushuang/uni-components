import Vue from 'vue'
import App from './App'
// 导入补间引擎
// import './common/gh/js'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
