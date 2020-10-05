# Vue3 笔记

## attrs 和 props 区别

- props 先声明才能取值, attr 不用声明
- props 不能接受事件, attr 包含
- props 没有声明的属性回到 attr 里去
- props 支持类型比较多, attr 只支持 string 类型

## css 影响最小原则

- 做组件时 css 的样式不能用 scoped
- 用户的样式可以覆盖
- 不能影响用户的 css, 所以要加上统一的前缀
