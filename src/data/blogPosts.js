export const blogPosts = [
  {
    id: "react-component-patterns",
    title: "React 组件设计模式深度解析",
    date: "2025-10-20",
    tag: "技术笔记",
    excerpt:
      "深入探讨 React 组件的设计模式，包括容器组件、展示组件、高阶组件等核心概念，帮助你写出更优雅的 React 代码。",
    content: `
# React 组件设计模式深度解析

在 React 开发中，良好的组件设计模式能够让代码更易维护、更可复用。本文将深入探讨几种常见的 React 组件设计模式。

## 1. 容器组件与展示组件

这是 React 中最基础也最重要的设计模式之一。

### 展示组件（Presentational Components）

展示组件主要负责 UI 的呈现，它们：
- 关注事物的外观
- 通过 props 接收数据和回调函数
- 很少包含自己的状态（除了 UI 状态）
- 通常是纯函数组件

\`\`\`jsx
const UserCard = ({ user, onEdit }) => (
  <div className="user-card">
    <h3>{user.name}</h3>
    <p>{user.email}</p>
    <button onClick={onEdit}>编辑</button>
  </div>
);
\`\`\`

### 容器组件（Container Components）

容器组件主要负责数据和业务逻辑：
- 关注事物如何工作
- 为展示组件提供数据和行为
- 通常有自己的状态
- 调用 API 和管理数据流

\`\`\`jsx
const UserCardContainer = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser().then(setUser);
  }, []);
  
  const handleEdit = () => {
    // 处理编辑逻辑
  };
  
  return <UserCard user={user} onEdit={handleEdit} />;
};
\`\`\`

## 2. 复合组件模式（Compound Components）

这种模式允许创建更灵活和可定制的组件：

\`\`\`jsx
const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="tabs">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isActive: index === activeIndex,
          onClick: () => setActiveIndex(index),
        })
      )}
    </div>
  );
};

const Tab = ({ isActive, onClick, children }) => (
  <button 
    className={\`tab \${isActive ? 'active' : ''}\`}
    onClick={onClick}
  >
    {children}
  </button>
);
\`\`\`

## 3. Render Props 模式

通过 props 传递渲染逻辑：

\`\`\`jsx
const DataFetcher = ({ url, render }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  
  return render({ data, loading });
};

// 使用
<DataFetcher 
  url="/api/users"
  render={({ data, loading }) => (
    loading ? <Spinner /> : <UserList users={data} />
  )}
/>
\`\`\`

## 4. 自定义 Hooks

最现代的模式，用于复用状态逻辑：

\`\`\`jsx
const useUser = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchUser(userId)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [userId]);
  
  return { user, loading, error };
};

// 使用
const UserProfile = ({ userId }) => {
  const { user, loading, error } = useUser(userId);
  
  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;
  return <UserCard user={user} />;
};
\`\`\`

## 总结

选择合适的组件设计模式能够：
- 提高代码的可维护性
- 增强组件的可复用性
- 使代码结构更清晰
- 提升团队协作效率

在实际项目中，我们通常会结合使用多种模式，根据具体场景选择最合适的方案。
`,
  },
  {
    id: "macbook-air-review",
    title: "MacBook Air M2 使用一年后的真实感受",
    date: "2025-10-15",
    tag: "数码分享",
    excerpt:
      "作为一名开发者，使用 MacBook Air M2 一年后的详细体验分享，包括性能、续航、配件推荐等方方面面。",
    content: `
# MacBook Air M2 使用一年后的真实感受

去年这个时候入手了 MacBook Air M2，作为一名全栈开发者，经过一年的深度使用，我想分享一些真实的体验。

## 外观设计

### 新设计语言

M2 Air 采用了与 MacBook Pro 相似的直角边框设计，相比之前的楔形设计更加现代化。

**优点：**
- 全新的午夜蓝配色非常高级
- 更薄的机身（11.3mm）
- MagSafe 充电口回归

**缺点：**
- 午夜蓝款容易留指纹
- 直角边框长时间手腕可能不太舒适

## 性能表现

### 日常开发

作为开发者，我主要的工作流程：
- VS Code + 多个 Docker 容器
- Chrome 浏览器（20+ 标签页）
- Figma 设计稿预览
- 终端 + Node.js 服务

**体验：**
- 8GB 内存基本够用，但建议上 16GB
- M2 芯片完全能胜任日常开发
- 无风扇设计，完全静音
- 编译速度比 Intel MacBook 快很多

### 性能测试

一些具体的测试数据：
- Geekbench 5: 单核 2600+，多核 9800+
- 大型 React 项目构建时间：约 30 秒
- Docker 容器运行流畅
- 可以流畅剪辑 4K 视频（Final Cut Pro）

## 续航能力

这是 M2 Air 最让我满意的地方：

- **轻度使用**（浏览网页、写文档）：14-16 小时
- **中度使用**（编程、看视频）：10-12 小时
- **重度使用**（视频剪辑、大型编译）：6-8 小时

基本上可以做到一整天不用充电，这对于经常外出办公的我来说非常重要。

## 屏幕体验

### Liquid Retina Display

- 13.6 英寸 2560 x 1664 分辨率
- 支持 P3 广色域
- 最高亮度 500 尼特
- True Tone 技术

**实际体验：**
- 色彩准确，适合设计工作
- 刘海设计初期有点不适应，现在完全习惯
- 亮度足够，室外使用无压力

## 配件推荐

经过一年的使用，这些配件我觉得很值得：

### 必备配件

1. **USB-C 扩展坞**
   - 推荐：Anker 7 合 1 扩展坞
   - 价格：约 ¥300
   - 提供 HDMI、USB-A、SD 卡槽等

2. **鼠标**
   - 推荐：罗技 MX Master 3S
   - 价格：¥699
   - 支持多设备切换，手感极佳

3. **键盘（可选）**
   - 推荐：Keychron K8 Pro
   - 价格：¥799
   - 机械键盘，打字手感更好

4. **显示器**
   - 推荐：Dell U2723DE
   - 价格：¥3299
   - 27 寸 2K，支持 USB-C 一线连

### 软件推荐

- **Raycast**: 替代 Spotlight，效率神器
- **Rectangle**: 窗口管理工具
- **CleanShot X**: 截图和录屏工具
- **Bartender**: 菜单栏管理工具

## 总结

### 适合人群

✅ **推荐给：**
- 学生和轻度办公用户
- 前端和 Web 开发者
- 内容创作者（文字、图片）
- 追求便携和续航的用户

❌ **不推荐给：**
- 需要频繁运行虚拟机的开发者
- 视频剪辑专业用户（建议 Pro）
- 游戏玩家
- 需要 32GB+ 内存的用户

### 购买建议

如果预算允许，我的配置建议：
- **芯片**: M2 基础版就够（除非有特殊需求）
- **内存**: 16GB（强烈建议）
- **硬盘**: 512GB 起步
- **配色**: 星光色（最不易留指纹）

**总体评分：9/10**

一年使用下来，MacBook Air M2 是一台非常均衡的笔记本。它可能不是性能最强的，但综合体验绝对是顶级的。如果你是开发者或创作者，这台机器不会让你失望。
`,
  },
  {
    id: "shawshank-redemption-review",
    title: "《肖申克的救赎》：希望是美好的事物",
    date: "2025-10-10",
    tag: "观影记",
    excerpt:
      "重温经典电影《肖申克的救赎》，感悟关于希望、自由和人性的永恒主题。这不仅是一部电影，更是一堂关于人生的课程。",
    content: `
# 《肖申克的救赎》：希望是美好的事物

> "Hope is a good thing, maybe the best of things, and no good thing ever dies."  
> "希望是美好的，也许是人间至善，而美好的事物永不消逝。"

这已经是我第五次重温《肖申克的救赎》了。每一次观看，都能从中获得新的感悟。

## 关于电影

**基本信息：**
- 导演：Frank Darabont
- 主演：Tim Robbins, Morgan Freeman
- 上映年份：1994
- IMDb 评分：9.3/10
- 个人评分：10/10

## 剧情概述（轻微剧透）

银行家 Andy Dufresne 被误判杀妻罪，被判终身监禁，送往肖申克监狱。在监狱里，他结识了 Red，开始了长达 19 年的监狱生活。Andy 用他的智慧和希望，不仅改变了自己的命运，也影响了周围的每一个人。

## 深度解析

### 1. 希望的力量

这是电影最核心的主题。

**Red 起初的观点：**
"Hope is a dangerous thing. Hope can drive a man insane."
（希望是危险的东西，希望能叫人发疯。）

Red 在监狱里待了几十年，已经被"体制化"了。他不相信希望，因为希望曾经让他失望太多次。

**Andy 的坚持：**
但 Andy 不同，他从未放弃希望。他用 19 年的时间，用一把小锤子挖出了通往自由的隧道。这个过程本身就是希望的具象化。

### 关键场景：播放《费加罗的婚礼》

这是我最喜欢的场景之一。Andy 冒着被关禁闭的风险，在监狱的喇叭里播放歌剧。

那一刻，所有人都停下了手中的活，仰望天空，倾听音乐。即使他们听不懂意大利语，即使只有短短几分钟，但那一刻，他们是自由的。

正如 Red 的旁白：
"我告诉你，那些声音飞得很高很远，超过任何囚犯的梦想。就像一只美丽的鸟儿飞进我们这灰色的鸟笼，让那些墙壁消失。那一刻，肖申克监狱的每一个人，都感到了自由。"

### 2. 自由与束缚

电影中有两种监狱：

**有形的监狱**
- 肖申克监狱的高墙
- 狱警的暴力
- 监狱长的腐败

**无形的监狱**
- 被体制化的思想
- 对希望的恐惧
- 对自由的陌生

更可怕的是无形的监狱。Brooks 出狱后自杀，因为他已经无法适应外面的世界。Red 也差点走上同样的道路。

这让我想到：我们每个人是否也生活在某种"监狱"中？工作的压力、社会的期待、他人的眼光，这些是否也成为了束缚我们的"高墙"？

### 3. 救赎与重生

标题中的"救赎"（Redemption）是双向的：

**Andy 的救赎**
- 证明自己的清白
- 重获自由
- 在墨西哥开始新生活

**Red 的救赎**
- 重新找到希望
- 获得假释
- 与 Andy 在太平洋海边重聚

Andy 救赎了自己，也救赎了 Red。他们用不同的方式获得了新生。

## 印象深刻的台词

除了开头提到的那句，还有这些台词让我印象深刻：

1. **关于忙碌**
   "Get busy living or get busy dying."
   （要么忙着活，要么忙着死。）

2. **关于体制化**
   "These walls are funny. First you hate them, then you get used to them. Enough time passes, you get so you depend on them."
   （这些墙很有趣。起初你恨它们，然后你习惯它们。足够长的时间后，你会依赖它们。）

3. **关于希望**
   "Remember, Hope is a good thing, maybe the best of things, and no good thing ever dies."
   （记住，希望是美好的，也许是人间至善，而美好的事物永不消逝。）

## 个人感悟

作为一名开发者，我常常觉得工作就像一种"体制化"的过程：

- 每天面对相似的代码
- 处理相似的 bug
- 参加相似的会议

有时候会感到疲惫，感到困顿，就像 Red 说的那样，被"体制化"了。

但这部电影提醒我：

**永远不要放弃希望。**

无论处境多么艰难，只要心中有希望，就有改变的可能。Andy 用 19 年挖出了一条隧道，我们也可以用时间和坚持，挖出属于自己的"隧道"。

也许是学习一门新技术，也许是开始一个新项目，也许只是保持对生活的热爱。

## 推荐指数

**⭐⭐⭐⭐⭐ 5/5 星**

这是一部每个人都应该看的电影。它关于希望，关于自由，关于人性。

无论你现在处于人生的哪个阶段，这部电影都能给你力量。

## 结语

最后，我想用电影的结尾来结束这篇影评：

Red 终于获得假释，他来到 Andy 说的那棵橡树下，找到了 Andy 留给他的信和钱。然后，他违反了假释规定，前往墨西哥去找 Andy。

电影的最后一个镜头，是两个老朋友在太平洋海边重逢。

那一刻，我总会忍不住落泪。

因为我看到了：
- 希望的胜利
- 友谊的力量
- 人性的光辉

Hope is a good thing, maybe the best of things.

希望是美好的，也许是人间至善。

永远不要放弃希望。
`,
  },
];
