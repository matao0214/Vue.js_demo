new Vue({
  el: "#app",
  data: {
    x: 50,
    se: [],
    aaa: '',
    some: [],
    message: "Hello Vue.js!",
    val: true

  },

  methods: {
    handleClick: function() {
      alert('クリックしたよ')
    },

    handleInput: function(event){
      this.message = event.target.value
    },

    handler: function(comment){
      console.log(comment)
    }
  }
})
