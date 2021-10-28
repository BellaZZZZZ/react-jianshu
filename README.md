# react开发简书app
## Header
- 使用styled-components写css样式，使用reset.css使默认样式在所有浏览器做到统一
### 一行中前半部分左浮动，后半部分右浮动
```css
.left {
  float: left;
}
.right {
  `float: right;`
}
```
### box-sizing: border-box
### 使用 Iconfont 嵌入头部图标
### float 浮动不占位置
### react-transition-group
## ⚠️注意事项
### 使用styled-components管理css
css文件一旦在一个文件中引入后，全局都生效。但是这样会造成组件样式间的互相干扰。因此不建议在项目中直接引用css文件，建议使用一个第三方的模块**styled-components**。
### 使用Reset CSS
优点：不同浏览器内核对html body等标签设置是不同的。为了使网页在所有浏览器上表现都是一致的，先把浏览器默认对这些标签的实现进行统一。
## 使用iconfont
- 在iconfont.css`@font-face src:url iconfont`前加相对路径
  ```css
  @font-face {
    font-family: "iconfont"; /* Project id 2468859 */
    src: url('./iconfont.woff2?t=1634457222552') format('woff2'),
        url('./iconfont.woff?t=1634457222552') format('woff'),
        url('./iconfont.ttf?t=1634457222552') format('truetype');
  }
  ```
- 全局使用iconfont（styled-components）
- immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
- `(list.size === 0) && dispatch(getList());`是if语句的简写，等同于
  ```javascript
  if (list.size === 0) {
    dispatch(getList());
  }
  ```
## react路由

## PureComponent
react fiber
内置shouldComponentUpdate
之所以使用PureComponent是因为项目中使用了immutable.js来管理数据
## 单页应用，整个网站在访问过程中只会加载一次html文件

## 内层用了float所以外层要触发BFC使高度自适应

## 页面路由参数的传递
- 动态路由获取参数

## 异步加载组件
要求打开首页只加载首页代码，打开登录页面只加载登录页面（和打包方式有关？
react-loadable
异步加载提升首屏速度
bundle? chunk?
- block才能用transform? why?

## 功能idea
- 搜索历史
- 添加骨架屏
- 懒加载
- 分页优化，可以参考[原生js实现分页组件开发（一）](https://blog.csdn.net/Charissa2017/article/details/104099398)
- 微信小程序扫码登录
- 博客中插入
- 新消息通知推送 websocket
- 浏览器缓存
- 要搞个后台
- 可以加一个抽奖
- 响应式布局，适配性
- 账号密码缓存
- 嵌套路由
- 把styled-component 换成 css moudle
- 懒加载用react.lazy和react.Suspense
- react组件缓存
- 后端 node websocket mysql
