var app = new Vue({
  el: '#app',
  data: {
    colors: [
      {name: "Red"},
      {name: "Blue"},
      {name: "Green"}
    ]
  },
  watch: {
    colors: {
      handler: function(newValue, oldValue) {
        console.log('Update!')
      },
      deep: true
    }
  },
})
