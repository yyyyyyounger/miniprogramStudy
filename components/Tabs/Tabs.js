Component({
  properties: {
    
  },

  data: {
    tabs: [
      { id:0, name:"首頁", isActive:true },
      { id:1, name:"原創", isActive:false },
      { id:2, name:"分類", isActive:false },
      { id:3, name:"關於", isActive:false }
    ]
  },

/*
    .js文件中 存放事件回調函數的時候，存放在data同層級下！！
    組件的 .js文件中，存放事件回調函數的時候，必須存放在method中！！
*/
  methods: {
    handleItemTap(e){
    /*
      1 綁定點擊事件
      2 獲取被點擊的索引
      3 獲取原數組
      4 對數組循環
        1 給每一個循環項的 isActive選中屬性 改為flase
        2 給當前索引的項，添加激活選中效果
    */
      console.log(e);
      const {index} = e.currentTarget.dataset;
      let {tabs}=this.data; //{tabs}是解構，對複雜類型進行解構的時候，複製了一份變量的引用
      // let tabs = this.data.tabs; 意思與上句相同
      // [].forEach 用於遍歷數組，遍歷數組的時候還修改了v ,也會導致原數組被修改
      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      this.setData({
        tabs
      })
    }
  }


})
