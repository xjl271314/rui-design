<!-- # Button组件设计需求

- type 传入type可以选择已经定义的button类型 ------OK
- theme css样式button的主题
- disabled 传入disabled可以直接禁用button点击 ----OK
- className 外部传入的className可以用来覆盖样式 --------OK
- icon 传入组件或者内置的icon类型 不传的话不显示icon ----OK
- loading 可以传入loading来显示加载圈圈 ---OK
- shape 可以传入来更改按钮的radius -------OK
- size 可以传入设置按钮的大小 -------OK
- onClick 按钮的点击事件 -----OK
- style 传入的外部的style  -----OK
- waves 是否使用类似谷歌materials design点击按钮的水波纹效果 ----OK
- 其他原生button支持的属性 -->
 
<!-- ---
name: Button
route: /button
---
 
import { Playground, PropsTable } from 'docz'
import Button from './index.js'
 
# Button
 
<PropsTable of={Button} />
 
## Basic usage
 
<Playground>
 <Button>Click me</Button>
</Playground> -->