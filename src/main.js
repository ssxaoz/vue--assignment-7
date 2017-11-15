import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    updateDetails( server, callback ){
      this.$emit('serverChanged', { server, callback });
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
