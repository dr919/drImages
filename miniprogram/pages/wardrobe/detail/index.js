// pages/wardrobe/index.js

Page({
  data: {
    // github的图片资源
    // imgurl:'https://dr919.github.io/drImages/image/timg.jpg', 
    curType:'chenshan', //当前类型
    curLength:0, //当前类型数量
    isView:false,
    viewIdx:0,//预览的索引值
  },

  onLoad: function (options) {
    if(options.curLength){
      this.setData({
        curType:options.type,
        curLength:Number(options.curLength),
      })
      wx.setNavigationBarTitle({
        title:options.type
      })
    }

  },
  _viewImg(e){
    let curImgIdx =  e.currentTarget.dataset.idx;
    this.setData({
      isView:true,
      viewIdx:curImgIdx
    })
  },
  _hideImg(){
    this.setData({
      isView:false,
    })
  }
})

