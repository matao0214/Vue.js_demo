var app = new Vue({
    el: '#app',
    data: {
        items: null,
        keyword: '',
        message: ''
    },
    watch: {
        keyword: function(newKeyword, oldKeyword) {
            console.log(newKeyword)
            this.message = 'Wating for you to stop typing...'
            this.debouncedGetAnswer()
        }

    },
    created: function() {
        // デバッグ用デモデータ
        // this.keyword = 'JavaScirpt'
        // this.getAnswer()
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function() {
            if(this.keyword === '') {
                this.items = null
                this.message = ''
                return
            }

            this.message = 'Loading...'
            var vm = this
            var params = { page: 1, per_page: 20, query: this.keyword }
            // apiからデータを取得
            axios.get('https://qiita.com/api/v2/items', { params })
                // 取得したデータをlogに表示
                .then(function(response){
                    console.log(response)
                    vm.items = response.data
                } )
                .catch(function(error){
                    vm.message = 'Error!' + error
                })
                // 取得できたら、中身をリセット
                .finally(function(){
                    vm.message = ''
                })
        }

    }
})
