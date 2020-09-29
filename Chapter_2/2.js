new Vue({
  el: '#app',
  data: {
    cloak: "HIDE",
    html: 'Good <strong>Vue.js!</strong>',
    text: 'Vue',
    monsters: ['スライム', 'ドラゴン', 'ゴブリン'],
    message: {
      value: 'Hello!',
      scroll: 0,
      count: 0
    },
    num: 1,

    csObject: {
      child: true,
      'is-active': true,
      color: 'blue',
      backgroundColor: 'lightgray'    
    },
    item: {
      id: 1,
      src: 'item.jpeg',
      alt: '商品１サムネイル',
      width: 1000,
      height: 1000
    },
    
    radius: 50,
    ok: true,
    type: 'B',

    list: [
      { id: 1, name: 'スライム', HP: 100},
      { id: 2, name: 'ゴブリン', HP: 200},
      { id: 3, name: 'ドラゴン', HP: 500}
    ]
  },

 

  methods: {
    increment: function() {
      this.message.count += 1
    },
    // 追加ボタンを押したときのハンドラ
    doAdd: function() {
      // リスト内で一番大きなIDを取得
      var max = this.list.reduce(function(a,b) {
        return a > b.id ? a : b.id
      }, 0)
      // 新しいモンスターをリストに追加
      this.list.push({
        id: max + 1,
        name: this.name,
        HP: 500
      })
    },

    doRemove: function(index) {
      // 受け取ったインデックスの位置から一個要素を削除
      this.list.splice(index, 1)
    },

    doAttack: function(index) {
      this.list[index].HP -= 10
    }
  },

  mounted: function() {
    // this.scroll = 100 // 要素のスクロール量の操作
    // console.log(this.$el) // -> <div id="app"></div>
    console.log(this.$refs.hello) // これはp要素のDOM！
  },

  created: function() {
    axios.get('list.json').then(function(response){
      // 取得完了したらlistに代入
      this.list_2 = response.data
    }.bind(this)).catch(function(e) {
      console.error(e)
    })
  }
})
