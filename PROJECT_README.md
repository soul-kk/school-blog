# 个人博客网站

一个现代化、简约且带有活泼气息的个人博客网站，使用 Vite + React + TailwindCSS + Framer Motion 构建。

## 🎨 设计风格

- **主题**: 现代、简约、略带活泼与俏皮
- **配色方案**:
  - 主色: `#d8fcd5` (清新绿)
  - 辅色: `#fdd3af` (温暖橙)
- **特点**: 流畅的动画效果、响应式设计、优雅的交互体验

## 🛠️ 技术栈

- **前端框架**: React 19
- **构建工具**: Vite 7
- **样式**: TailwindCSS 4 + @tailwindcss/typography
- **动画**: Framer Motion
- **路由**: React Router DOM
- **图标**: Lucide React
- **Markdown**: React Markdown + Remark GFM + Rehype Highlight

## 📁 项目结构

```
blog-website/
├── src/
│   ├── components/        # 通用组件
│   │   ├── Navbar.jsx    # 顶部导航栏
│   │   ├── Footer.jsx    # 底部信息
│   │   └── BlogCard.jsx  # 博客卡片组件
│   ├── pages/            # 页面组件
│   │   ├── Home.jsx      # 主页
│   │   ├── BlogList.jsx  # 博客列表页
│   │   ├── BlogDetail.jsx # 博客详情页
│   │   └── Portfolio.jsx  # 作品集页
│   ├── data/             # 数据文件
│   │   ├── blogPosts.js  # 博客文章数据
│   │   └── projects.js   # 作品集数据
│   ├── App.jsx           # 主应用组件
│   ├── main.jsx          # 应用入口
│   └── index.css         # 全局样式
├── public/               # 静态资源
├── index.html           # HTML 模板
└── package.json         # 依赖配置

```

## 🚀 快速开始

### 安装依赖

```bash
cd blog-website
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看网站

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📄 页面说明

### 1. 主页 (`/`)

- 个人介绍区域
- 兴趣领域展示（技术笔记、数码分享、观影记、生活感悟）
- 技术栈展示（带动画效果）
- 最近更新的 3 篇博客文章

### 2. 博客列表页 (`/blog`)

- 标签分类筛选（全部、技术笔记、数码分享、观影记、生活感悟）
- 博客文章卡片展示
- 点击卡片跳转到详情页

### 3. 博客详情页 (`/blog/:id`)

- 完整的文章内容
- Markdown 渲染（支持代码高亮）
- 标签和日期显示
- 返回按钮

### 4. 作品集页 (`/portfolio`)

- 项目卡片网格展示
- 每个卡片包含：
  - 项目标题
  - 项目描述
  - 使用的技术栈
  - GitHub 链接和在线演示链接

## 📝 内容管理

### 添加新博客文章

在 `src/data/blogPosts.js` 中添加新的文章对象：

```javascript
{
  id: "your-post-id",
  title: "文章标题",
  date: "2025-10-29",
  tag: "技术笔记", // 或 "数码分享", "观影记", "生活感悟"
  excerpt: "文章摘要...",
  content: `
# 文章标题

文章的 Markdown 内容...
  `
}
```

### 添加新项目

在 `src/data/projects.js` 中添加新的项目对象：

```javascript
{
  id: 6,
  title: "项目名称",
  description: "项目描述",
  tech: ["React", "Node.js", "..."],
  github: "https://github.com/...",
  demo: "https://..."
}
```

## 🎯 功能特性

- ✅ 响应式设计，支持移动端和桌面端
- ✅ 流畅的页面切换动画
- ✅ 博客分类筛选
- ✅ Markdown 文章渲染
- ✅ 代码语法高亮
- ✅ 现代化的 UI 设计
- ✅ 优化的性能表现

## 🎨 自定义主题

修改 `tailwind.config.js` 中的颜色配置：

```javascript
theme: {
  extend: {
    colors: {
      primary: "#d8fcd5",  // 主色
      secondary: "#fdd3af", // 辅色
    },
  },
}
```

## 📦 主要依赖

- `react` & `react-dom`: 前端框架
- `react-router-dom`: 路由管理
- `framer-motion`: 动画库
- `react-markdown`: Markdown 渲染
- `remark-gfm`: GitHub 风格 Markdown
- `rehype-highlight`: 代码高亮
- `lucide-react`: 图标库
- `tailwindcss`: CSS 框架

## 📸 页面截图

（可以在这里添加网站截图）

## 📄 许可证

MIT License

## 👨‍💻 作者

你的名字

---

💡 如有问题或建议，欢迎提 Issue 或 PR！
