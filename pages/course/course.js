// 可以只保留Page和data
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 字符串類型
    msg:"Hello, mina !",
    // 數字類型
    num:10000,
    //bool 類型
    isGirl:false,
    person:{
      age:74,
      height:147,
      weight:200,
      name:"富婆"
    },
    //數組類型
    list:[
      {
        id:0,
        name:"豬八戒"
      },
      {
        id:1,
        name:"天蓬元帥"
      },
      {
        id:2,
        name:"悟能"
      },
    ]
  }
})