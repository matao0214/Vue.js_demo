var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    list: ['りんご', 'ばなな', 'いちご'],
    message_2: '初期メッセージ',
    show: true
  },

  methods: {
    handleClick: function(event) {
      alert(event.target) //[object HMTLButtonElement]
    }
  }
})
