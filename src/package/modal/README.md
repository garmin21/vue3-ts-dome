- modal 实验vue3开发弹框组件

原理:
- 使用 vue3 新特性 teleport (任意门)支持, 可以将元素移动到某一个节点下
- transition 实现动画

注意: 
// 1. 挂在相同节点下不会冲突
// 2. teleport上的class无效
// 3. setup 中 this 不存在



### 组件介绍

1. core.vue 负责弹框上在打开一个弹框