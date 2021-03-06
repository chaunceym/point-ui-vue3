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

## Dialog 必须移到 body 下面

- 防止 css 上下文层级叠加问题
- 使用 Teleport 组件(Vue3 新出)

## context.slots.default()

- 获取虚拟节点
- 返回值是一个数组, 数组元素为节点元素
- 所以组件都会变成一个对象

## watchEffect, onMounted, onUpdated

- onMounted: 挂载完成后执行
- onUpdated: 更新后
- watchEffect: 数据更新后, 挂载前也会执行
- 在 onMounted 内执行 watchEffect, 实现 onMounted 后拿到数据

## 动态引入模块

- import(路径), 返回 promise

## 事不过三(核心技巧)

- 提升技巧的关键点

## 遇到的项目问题

1. Dialog 的潜在 bug, 会被遮挡, 使用 teleport 组件让 Dialog 组件放在 body 中, 避免覆盖
2. 优化技巧, Onmounted, Onupdated, 联合成 watchEffect 钩子函数, 不过 watchEffect 会在 create 之前也会执行,
所以根据官网上把 watchEffect 放在 Onmounted 里解决
3. 制作 openDialog 一键生成组件的时候, 用到了 createApp 里的 render 函数返回 h 函数去创建一个 Vue 组件实例挂载到创建的 
div 上, 属性和插槽都配置在函数参数对象上
4. 怎样显示源代码, 就是把组件的源码都获取到, 利用 Vite 的 Custom Block, 获取到自定义 demo 的文件路径, 然后利用 node 的读文件
去获得内容, 挂载到组件之上
