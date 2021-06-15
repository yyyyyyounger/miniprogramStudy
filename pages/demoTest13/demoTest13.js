// pages/demoTest13/demoTest13.js
Page({
  data: {
    list: [
      {id:0, name:"零"},
      {id:1, name:"一"},
      {id:2, name:"二"},
    ],
    array: [1, 2, 3, 4, 5]
  },

  handleTap1 (e){
    console.log(e);
  },
  handleTap2 (e){
    console.log(e);
  }
})