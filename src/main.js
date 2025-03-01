/**
 * main.js - 项目入口文件
 * 负责应用程序的初始化、全局组件注册和路由配置
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 导入需要使用的Vant组件
import {
  Button,
  Tabbar,
  TabbarItem,
  NavBar,
  Search,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Card,
  Image as VanImage,
  Cell,
  CellGroup,
  TreeSelect,
  SwipeCell,
  Checkbox,
  CheckboxGroup,
  Stepper,
  SubmitBar,
  Empty,
  Divider
} from 'vant'

// 导入Vant的样式文件
import 'vant/lib/index.css'

// 创建Vue应用实例
const app = createApp(App)

// 注册Vant组件
// 按需注册使用到的组件，减小打包体积
app
  .use(Button) // 按钮组件
  .use(Tabbar) // 标签栏组件
  .use(TabbarItem) // 标签栏子项组件
  .use(NavBar) // 导航栏组件
  .use(Search) // 搜索组件
  .use(Swipe) // 轮播组件
  .use(SwipeItem) // 轮播子项组件
  .use(Grid) // 宫格组件
  .use(GridItem) // 宫格子项组件
  .use(Card) // 商品卡片组件
  .use(VanImage) // 图片组件
  .use(Cell) // 单元格组件
  .use(CellGroup) // 单元格分组组件
  .use(TreeSelect) // 分类选择组件
  .use(SwipeCell) // 滑动单元格组件
  .use(Checkbox) // 复选框组件
  .use(CheckboxGroup) // 复选框组组件
  .use(Stepper) // 步进器组件
  .use(SubmitBar) // 提交订单栏组件
  .use(Empty) // 空状态组件
  .use(Divider) // 分割线组件

// 注册路由插件
app.use(router)

// 挂载应用到#app节点
app.mount('#app')
