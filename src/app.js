import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'Hello!'
  },
  template: '<div id="app">{{ hello }}</div>'
})

export { app }
