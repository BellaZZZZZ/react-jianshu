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
