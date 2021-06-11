// pages/demoTest11/demoTest11.js
Page({
  data: {
    gender: ""
  },
  handleChange(e){
    console.log(e);
    // 獲取選擇的單選框的值
    let gender = e.detail.value;
    // 把值賦值給 data中的數據
    this.setData({
      gender:gender
    })
  }
  
})
