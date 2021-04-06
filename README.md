# react开发简书app
## Header
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

## ⚠️注意事项
### 使用styled-components管理css
css文件一旦在一个文件中引入后，全局都生效。但是这样会造成组件样式间的互相干扰。因此不建议在项目中直接引用css文件，建议使用一个第三方的模块**styled-components**。
### 使用Reset CSS
优点：不同浏览器内核对html body等标签设置是不同的。为了使网页在所有浏览器上表现都是一致的，先把浏览器默认对这些标签的实现进行统一。
