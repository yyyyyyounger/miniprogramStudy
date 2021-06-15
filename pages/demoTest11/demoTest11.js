// pages/demoTest11/demoTest11.js
Page({
  data: {
    gender: "",
    list:[
      {
        id:0,
        name:"苹果",
        value:"apple",
      },
      {
        id:1,
        name:"葡萄",
        value:"grape",
      },
      {
        id:2,
        name:"香蕉",
        value:"banana",
      }
    ],
    checkedList:[]
  },

  // "e"可以隨便取
  handleChange(e){
    console.log(e);
    // 獲取選擇的單選框的值
    let genderLog = e.detail.value;
    if(genderLog == 'female'){
      genderLog = '女'
    }
    else{
      genderLog = '男'
    }    
    // 把值賦值給 data中的數據
    this.setData({
      gender:genderLog
    })
  },

  //複選框的選中事件
  handleItemChange(e){
    // console.log(e.detail.value);
    const checkedList = e.detail.value;
    this.setData({
      checkedList:checkedList
    })
  }
  
})