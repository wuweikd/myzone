var touchStartX = 0;//触摸时的原点
var touchStartY = 0;//触摸时的原点
var time = 0;// 时间记录，用于滑动时且时间小于1s则执行左右滑动
var interval = "";// 记录/清理时间记录
var touchMoveX = 0; // x轴方向移动的距离
var touchMoveY = 0; // y轴方向移动的距离
Component({
    data: {
        transX: '-300px'
    },
    properties: {
        p_transX: {
            type: String
        }
    },
    methods: {
        preventTouchMove () {
            return
        },
        getFatherTransX () {
            this.setData({
                transX:  '0px'
            })
        },
        // 触摸开始事件
        touchStart: function (e) {
            touchStartX = e.touches[0].pageX; // 获取触摸时的原点
            touchStartY = e.touches[0].pageY; // 获取触摸时的原点
            // 使用js计时器记录时间
            interval = setInterval(function () {
                time++;
            }, 100);
        },
        // 触摸移动事件
        touchMove: function (e) {
            touchMoveX = e.touches[0].pageX;
            touchMoveY = e.touches[0].pageY;
            this.dealTouch()
        },
        // 触摸结束事件
        touchEnd: function (e) {
            console.log('结束')
            let that = this
            if (touchMoveX - touchStartX < -200) {
                that.setData({
                    transX:  '-300px'
                })
            } else {
                that.setData({
                    transX:  '0px'
                })
            }
        },
        dealTouch () {
            let that = this
          var moveX = touchMoveX - touchStartX
          var moveY = touchMoveY - touchStartY
          if (Math.sign(moveX) == -1) {
            moveX = moveX * -1
          }
          if (Math.sign(moveY) == -1) {
            moveY = moveY * -1
          }
          if (moveX >= moveY) {// 左右
              if (touchMoveX - touchStartX > 0) {
                  return
              }
              that.setData({
                  transX: touchMoveX - touchStartX + 'px'
              })
          }
        }
    }
})
