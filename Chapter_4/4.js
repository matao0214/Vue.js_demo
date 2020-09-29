new Vue ({
  el: "#app",
  data: {
    width: 800,
    height: 600,
    budget: 300,
    limit: 2,
    list: [
      { id: 1, name: 'りんご', price: 100 },
      { id: 2, name: 'ばなな', price: 200 },
      { id: 3, name: 'いちご', price: 400 },
      { id: 4, name: 'おれんじ', price: 300 },
      { id: 5, name: 'メロン', price: 500 },
    ],
    order: false
  },

  computed: {
    // budget以下のリストを返す算出プロパティ
    matched: function() {
      return this.list.filter(function(el){
        return el.price <= this.budget
      }, this)
    },

    // sorted: function() {
    //   return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
    // },

    // matchedで返ったデータをlimit件で返す算出プロパティ
    limited: function() {
      return this.matched.slice(0, this.limit)
    },




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
