// Vue.component('my-component', {
//   template: '<p>MyComponent</p>'
// })

Vue.component('comp-child', {
  // テンプレートでvalを使用
  template: '<p>{{ val }}</p>',
  // 受け取る属性を指定
  props: ['val']
})



var myComponent = {
  template: '<p>MyComponent</p>'
}

new Vue({
  el: "#app",

  data: {
    message: 'Hello!'
  },

  components: {
    'my-component': myComponent
  }
})
