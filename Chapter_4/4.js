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

new Vue({
  el: "#app2",

  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  },




  data: {

    price: 19800,
    list: [],
    current: '',
    topics: [
      { value: 'vue', name: 'Vue.js' },
      { value: 'jQuery', name: 'jQuery' }
    ]
  },


  filters: {
    localeNum: function(val) {
      return val.toLocaleString()
    },

    filter: function(message, foo, num) {
      console.log(message, foo, num)
    },

    round: function(val) {
      return Math.round(val * 100) / 100
    },

    radian: function(val) {
      return val * Math.PI / 180
    }
  },

  watch: {
    current: function(val) {
      // GitHubのAPIからトピックのリポジトリを検索
      axios.get('https://api.github.com/search/repositories', {
        params: { q: 'topic:' + val }
      }).then(function(response) {
        this.list = response.data.items
      }.bind(this))
    }
  }

})

new Vue ({
  el: "#app4",
  data: {
    list: ['りんご', 'ばなな']
  },

  watch: {
    list: function() {
      console.log('通常：', this.list.offsetHeight)
      this.$nextTick(function(){
        console.log(('nextTick:', this.$refs.list.offsetHeight))
      })
    }
  }
})
