# Vue 3 移动商城项目

基于 Vue 3 + Vite + Vant UI 开发的移动端商城项目，采用最新的 Vue 3 组合式 API 和 `<script setup>` 语法糖实现。项目采用现代化的技术栈和最佳实践，提供流畅的移动购物体验。

## 技术栈

- **Vue 3**：采用 Vue 3 组合式 API，提供更好的代码组织和逻辑复用
- **Vite**：下一代前端构建工具，提供极速的开发体验
- **Vue Router**：Vue.js 官方路由，用于实现单页应用导航
- **Vant UI**：有赞前端团队开发的轻量、可靠的移动端 Vue 组件库，提供丰富的移动端组件

## 功能特点

### 首页

- 搜索框：支持商品搜索
- 轮播图：展示主要活动和商品
- 商品分类：快速导航到不同品类
- 热门商品：展示热门商品列表

### 分类页

- 树形分类：直观的商品分类展示
- 分类商品列表：展示各分类下的商品
- 商品操作：支持加入购物车和立即购买

### 购物车

- 商品管理：支持商品选择、数量修改和删除
- 价格计算：自动计算选中商品总价
- 商品结算：支持选中商品快速结算

### 个人中心

- 用户信息：展示和管理用户基本信息
- 订单管理：查看不同状态的订单
- 收货地址：管理收货地址
- 更多功能：包括优惠券、收藏、浏览历史等

## 安装和使用

### 环境要求

- Node.js 14.0 或更高版本
- npm 6.0 或更高版本

### 安装步骤

```bash
# 克隆项目
git clone [项目地址]

# 进入项目目录
cd vue

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 构建部署

```bash
# 构建生产环境版本
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
├── src/                # 源代码目录
│   ├── assets/         # 静态资源（图片、样式等）
│   ├── components/     # 公共组件
│   ├── router/         # 路由配置
│   ├── views/          # 页面组件
│   │   ├── Home.vue    # 首页
│   │   ├── Category.vue# 分类页
│   │   ├── Cart.vue    # 购物车
│   │   └── Profile.vue # 个人中心
│   ├── App.vue         # 根组件
│   └── main.js         # 应用入口文件
├── index.html          # HTML 模板
├── vite.config.js      # Vite 配置文件
└── package.json        # 项目配置和依赖
```

## 开发指南

### 代码规范

- 使用 ESLint 进行代码检查
- 采用 Vue 3 组合式 API 和 `<script setup>` 语法
- 组件和变量命名采用驼峰式

### 组件开发

- 页面组件放在 `views` 目录
- 可复用组件放在 `components` 目录
- 使用 Vant UI 组件库提高开发效率

### 样式指南

- 使用 CSS 预处理器
- 遵循 BEM 命名规范
- 优先使用 Vant UI 提供的样式变量

## 贡献指南

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/xxx`
3. 提交代码：`git commit -m 'feat: 添加xxx功能'`
4. 推送分支：`git push origin feature/xxx`
5. 提交 Pull Request

## 开源协议

本项目基于 MIT 协议开源，详细内容请参考 [LICENSE](LICENSE) 文件。

- Node.js >= 14.0.0
- npm >= 6.0.0

## 浏览器支持

- 支持现代浏览器和 IE11+
- 支持移动端主流浏览器

## 注意事项

- 本项目主要面向移动端，建议使用 Chrome 开发者工具的移动端模式进行开发和调试
- 项目使用 Vant UI 组件库，建议先熟悉 Vant 的使用方法和组件 API

## 贡献指南

1. Fork 本仓库
2. 创建新的功能分支
3. 提交你的更改
4. 发起 Pull Request

## 许可证

[MIT](LICENSE)
