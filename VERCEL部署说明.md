# Vercel 部署说明

## 已完成的配置

✅ 已创建 `vercel.json` 配置文件，用于处理 React Router 的客户端路由

## 部署步骤

### 方式一：通过 Vercel 网站部署（推荐）

1. **访问 Vercel**

   - 前往 [https://vercel.com](https://vercel.com)
   - 使用 GitHub/GitLab/Bitbucket 账号登录

2. **导入项目**

   - 点击 "Add New..." → "Project"
   - 选择你的 Git 仓库（blog-website）
   - 点击 "Import"

3. **配置项目**

   - **Framework Preset**: Vite（通常会自动检测）
   - **Build Command**: `npm run build`（已自动填充）
   - **Output Directory**: `dist`（Vite 默认输出目录）
   - **Install Command**: `npm install`（已自动填充）

4. **部署**
   - 点击 "Deploy" 按钮
   - 等待几分钟，部署完成后会得到一个 `.vercel.app` 域名

### 方式二：通过 Vercel CLI 部署

1. **安装 Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **登录**

   ```bash
   vercel login
   ```

3. **部署**

   ```bash
   # 在项目根目录执行
   vercel
   ```

4. **生产部署**
   ```bash
   vercel --prod
   ```

## 重要说明

### vercel.json 配置说明

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

这个配置确保所有路由请求都会被重定向到 `index.html`，使得 React Router 可以正确处理客户端路由（如 `/blog`, `/portfolio` 等）。

### 自动部署

- 将代码推送到 Git 仓库后，Vercel 会自动触发部署
- 每个 Pull Request 都会生成预览环境
- main/master 分支的推送会自动部署到生产环境

### 环境变量

如果项目需要环境变量：

1. 在 Vercel Dashboard 中进入项目设置
2. 点击 "Environment Variables"
3. 添加所需的环境变量

### 自定义域名

1. 在 Vercel Dashboard 中进入项目设置
2. 点击 "Domains"
3. 添加你的自定义域名
4. 按照提示配置 DNS 记录

## 常见问题

### 1. 页面刷新后 404

✅ 已通过 `vercel.json` 配置解决

### 2. 构建失败

- 检查 Node.js 版本是否兼容
- 确保所有依赖都在 `package.json` 中
- 查看 Vercel 构建日志

### 3. 静态资源加载失败

- 确保在 `vite.config.js` 中配置了正确的 base 路径
- 使用相对路径引入资源

## 性能优化建议

1. **启用缓存**

   - Vercel 会自动为静态资源设置缓存

2. **代码分割**

   - 使用 React 的 `lazy` 和 `Suspense` 进行代码分割

3. **图片优化**
   - 使用 WebP 格式
   - 添加图片懒加载

## 监控和分析

Vercel 提供免费的分析功能：

- 访问统计
- 性能监控
- Web Vitals 指标

在项目 Dashboard 中查看 "Analytics" 选项卡。

## 需要帮助？

- Vercel 文档：https://vercel.com/docs
- Vite 文档：https://vitejs.dev
- React Router 文档：https://reactrouter.com
