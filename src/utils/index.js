export function localGet (key) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (error) {
    return value
  }
}

export function localSet (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function localRemove (key) {
  window.localStorage.removeItem(key)
}

export const pathMap = {
  index: '首页',
  login: '登录',
  add: '添加商品',
  swiper: '轮播图配置',
  hot: '热销商品配置',
  new: '新品上线配置',
  recommend: '为你推荐配置',
  category: '分类管理',
  level2: '分类二级管理',
  level3: '分类三级管理',
  good: '商品管理',
  order: '订单管理',
  order_detail: '订单详情',
  guest: '会员管理',
  account: '修改密码'
}

// 单张图片上传
// 单张图片上传
export const uploadImgServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/file'
// 多张图片上传
export const uploadImgsServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/files'

// {
//   createTime: "2021-04-17 16:42:43", // 创建时间
//   goodsCarousel: "/admin/dist/img/no-img.png", // 商品轮播图
//   goodsCategoryId: 182, // 商品分类 id
//   goodsCoverImg: "http://backend-api-02.newbee.ltd/upload/20210417_1642416.jpg", // 商品主图
//   goodsDetailContent: null, // 详情内容
//   goodsId: 11000, // 商品 id
//   goodsIntro: "2",
//   goodsName: "1", // 商品名称
//   goodsSellStatus: 1, // 商品上下架状态，0：下架，1：上架
//   originalPrice: 3, // 商品原价
//   sellingPrice: 4, // 商品售价
//   stockNum: 5, // 商品库存
//   tag: "6", // 标签
//   updateTime: "2021-04-18 10:51:53", // 更新时间
// }