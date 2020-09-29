new Vue ({
  el: "#app",
  data: {
    width: 800,
    height: 600
  },

  computed: {
    // 算出プロパティhalfWidthを定義
    halfWidth: {
      get: function() { return this.width / 2 },
      set: function(val) { this.width = val * 2 }
    },

    halfHeighy: function() {
      return this.height / 2
    },

    halfPoint: function() {
      return {
        x: this.halfWidth,
        y: this.halfHeighy
      }
    },


  }
})
