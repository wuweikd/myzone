Page({
    data: {
        isFresh: false,
        isLoading: true,
        pageSize: 10,
        pageNum: 10,
        tempList: [
            {
                title: '这是一条标题1',
                imgSrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=868224289,3487211352&fm=26&gp=0.jpg',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: '12213'
            },
            {
                title: '这是一条标题2',
                imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=181282827,1761097306&fm=26&gp=0.jpg',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: 'sdasda'
            },
            {
                title: '这是一条标题3',
                imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1540303114,186183717&fm=26&gp=0.jpg',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: 'sdasdasdasda'
            },
            {
                title: '这是一条标题4',
                imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4198876671,3541636053&fm=26&gp=0.jpg',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id:'sdadasdasdssdkfjsljkflda'
            }, {
                title: '这是一条标题5',
                imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=617700650,2322546206&fm=26&gp=0.jpg',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id:'sdadasdasdssdkfjsljkflda'
            }],
        articleList: [
            {
                title: '这是一条标题a',
                imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1713668518,2555400278&fm=26&gp=0.jpg',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: '12213'
            },
            {
                title: '这是一条标题b',
                imgSrc: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3282955313,1627124878&fm=26&gp=0.jpg',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: 'sdasda'
            },
            {
                title: '这是一条标题c',
                imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2813587181,396402789&fm=26&gp=0.jpg',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: 'sdasdasdasda'
            },
            {
                title: '这是一条标题d',
                imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=801220082,4120412334&fm=26&gp=0.jpg',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: 'sdasdasdasda'
            },
            {
                title: '这是一条标题e',
                imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3828271617,569977322&fm=26&gp=0.jpg',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: 'sdasdasdasda'
            },
            {
                title: '这是一条标题f',
                imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4281325793,262208751&fm=26&gp=0.jpg',
                content: '这是一条内容，这是一条内容这是一条内容这是一条内容，这是一条内容这是一条内容这是一条内容',
                id: 'sdasdasdasda'
            },
            {
                title: '这是一条标题g',
                imgSrc: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3428492181,2221038408&fm=26&gp=0.jpg',
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
    clickBlock (event) {
        let that = this
        that.data.articleList[event.currentTarget.dataset.index].isClick = !that.data.articleList[event.currentTarget.dataset.index].isClick
        let list = that.data.articleList
        that.setData({
            articleList:  list
        })
    }
})
