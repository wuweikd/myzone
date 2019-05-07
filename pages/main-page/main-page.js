Page({
    data: {
        isFresh: false,
        isLoading: true,
        pageSize: 10,
        pageNum: 10,
        tempList: [
            {
                title: '这是一条标题aaaa',
                imgSrc: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2890979740,2199494483&fm=11&gp=0.jpg',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: '12213'
            },
            {
                title: '这是一条标题bbb',
                imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3408668500,136141030&fm=26&gp=0.jpg',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: 'sdasda'
            },
            {
                title: '这是一条标题ccc',
                imgSrc: '',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: 'sdasdasdasda'
            },
            {
                title: '这是一条标题dddd',
                imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031109002,201983872&fm=26&gp=0.jpg',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id:'sdadasdasdssdkfjsljkflda'
            }],
        articleList: [
            {
                title: '这是一条标题11',
                imgSrc: '',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: '12213'
            },
            {
                title: '这是一条标题22',
                imgSrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=868224289,3487211352&fm=26&gp=0.jpg',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: 'sdasda'
            },
            {
                title: '这是一条标题33',
                imgSrc: '',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: 'sdasdasdasda'
            },
            {
                title: '这是一条标题44',
                imgSrc: '',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: 'sdasdasdasda'
            },
            {
                title: '这是一条标题55',
                imgSrc: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=382128038,4085018527&fm=26&gp=0.jpg',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: 'sdasdasdasda'
            },
            {
                title: '这是一条标题66',
                imgSrc: '',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id:'sdadasdasdssdkfjsljkflda'
            }]
    },
    onPullDownRefresh: function(){
        let that = this
        console.log('下拉刷新')
        setTimeout(()=> {
            that.setData({
                articleList:  that.data.articleList,
            })
            // // 隐藏导航栏加载框
            wx.hideNavigationBarLoading()
            // 停止下拉动作
            wx.stopPullDownRefresh()
        }, 500)
    },
    onReachBottom: function () {
        let that = this
        that.setData({
            isLoading: true
        })
        setTimeout(()=> {
            that.setData({
                articleList:  that.data.articleList.concat(that.data.tempList),
                isLoading: false
        })
        }, 500)
        console.log('上拉加载')
    },
    clickOpenMyself: function () {
        this.selectComponent('#transId').getFatherTransX()
        console.log('sdasdasd')
    }

})
