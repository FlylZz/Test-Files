# MinimalStore

Product showcase page for the Shopify + AI Agent intern test.
商品展示页面 — Shopify + AI Agent 实习生前端实操测试。

## How to run / 启动方式

Open `index.html` in any browser — no dependencies.
用浏览器打开 `index.html` 即可，无依赖。

## Files / 文件结构

- `index.html` — page structure / 页面结构
- `css/base.css` — reset, variables, global styles / 重置、变量、全局样式
- `css/components.css` — all component styles / 全部组件样式
- `css/responsive.css` — tablet + mobile breakpoints / 平板和手机响应式
- `js/data.js` — product data / 商品数据
- `js/app.js` — rendering + interactions / 渲染和交互逻辑

## Features / 功能

- Dynamic product cards from JSON (no hand-written HTML) / JSON 动态渲染商品卡片（无手写重复 HTML）
- Filter by tag: All / New / Hot / Sale / 按标签筛选：All / New / Hot / Sale
- Add to cart with badge counter + toast / 加入购物车 + 角标计数 + 提示
- Favorite toggle with heart animation / 收藏切换 + 心跳动画
- Responsive: 3-col → 2-col → 1-col / 响应式：三列 → 两列 → 单列
- Mobile hamburger menu / 移动端汉堡菜单
- Scroll-to-top button / 回到顶部按钮

## Implemented Interactions / 已实现的交互

1. Hover effect — card lift + image zoom / 悬停动效 — 卡片上浮 + 图片缩放
2. Button click — Add to Cart state change + color feedback / 按钮点击 — 状态切换 + 颜色反馈
3. Mobile menu — hamburger animation + overlay + body lock / 移动端菜单 — 汉堡动画 + 遮罩 + 禁止滚动
4. Product filter — All / New / Hot / Sale tag chips / 商品筛选 — 标签切换
5. Favorite toggle — heart icon switch + incremental DOM update / 收藏切换 — 心形切换 + 增量 DOM 更新

## Responsive / 响应式

| Breakpoint / 断点 | Layout / 布局 |
|---|---|
| Desktop / 桌面 (>900px) | 3-column grid / 3 列 |
| Tablet / 平板 (≤900px) | 2-column grid / 2 列 |
| Mobile / 手机 (≤600px) | 1-column + hamburger menu / 单列 + 汉堡菜单 |

## AI 使用说明

使用 Claude AI 辅助完成以下工作：

1. 任务拆分：将测试要求拆解为 HTML 结构、CSS 样式、JS 逻辑三个模块，分步实现
2. 代码生成：根据测试要求生成页面框架，人工调整细节（文案、间距、颜色）
3. 文件解耦：将单文件代码拆分为 HTML / CSS / JS 独立文件，降低耦合
