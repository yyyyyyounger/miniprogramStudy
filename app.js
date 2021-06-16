// app.js
App({
  // 1 應用第一次啟動就觸發的事件
  onLaunch(){
    // 在應用第一次啟動的時候，獲取用戶的個人信息
    // console.log("on Launch"); 
    // 通過js的方式來跳轉
    // wx.navigateTo({
    //   url: '11/22/33',
    // });
  },

  // 應用被用戶看到的時候觸發
  onShow(){
    // 對應用的數據或者頁面效果 重置
    // console.log("on Show");
  },
  // 應用被隱藏的時候觸發
  onHide(){
    // 暫停或者清除定時器
    console.log("Hide");
  },
  // 當應用發生了報錯的時候
  onError(err){
    // 在應用運行發生報錯時，收集應用信息，通過異步請求，將錯誤信息發送到後台去
    console.log("onError");
    console.log(err);
  },
  // 頁面找不到就會觸發
  // 應用第一次啟動的時候，if找不到第一個入口頁面，才會觸發
  onPageNotFound(){
    console.log("onPageNotFound");
  }
})
