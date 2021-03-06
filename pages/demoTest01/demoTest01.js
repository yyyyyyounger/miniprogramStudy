// pages/demoTest01/demoTest01.js
Page({
  data: {
    num:0
  },
  // 輸入框的input事件的執行邏輯
  handleInput (e) {   // e表示event源對象
    //console.log("😁");      // 用於在Console輸出相關信息
    // console.log(e.detail.value);
    this.setData({            //this 使用setData功能
      num: e.detail.value
    })
    console.log("num值為 " + this.data.num)
  },
  
  // 加減按鈕的事件
  handleTap (e) {
    console.log(e);
    const operation = e.currentTarget.dataset.operation;
    const num = this.data.num
    const numSet = num + operation;
    this.setData({
      // 需要用 this. 獲取值
      num: numSet
      // this.data.num + operation
    })
  }
  
})