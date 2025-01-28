# click counter计数器

## 功能差异点
为计数器添加了移动端的振动反馈 和 PC端的颜色特效 优化体验

> 这个关键词的难度还是可以的 可以继续搞搞 https://ahrefs.com/keyword-difficulty/?country=us&input=clickcounter

## 升级记录
### 01-25 计数功能 + SEO文案
### 01-26 功能list
- doing 添加分享页面，主要用来引流，对于流量提升意义明显
- ✅ 组件拆分 便于后续维护
- ✅ 添加快捷方式
- ✅ 添加下载功能
- ❌ list 和 block两种布局，感觉优先级不高
### 01-27 功能list
- ❌ 尝试接入google登入
- 继续搞分享页面，用来引流和分享
    - counter页面点击分享页面，数据新增一条share记录
    - 开发share页面，显示出对应的couter结果
    - 看看有没有必要显示折线图
### 01-28 功能list
1. ❌ 尝试接入google登入
    1.1 主要也是为了走下google登入的流程 学习一下经验
    1.2 [Google登录教程](https://coreychiu.com/blogs/google-oauth-setup)
    1.3 ✅ 发现还要去准备 这俩页面term-of-use privacy-policy
2. 搞分享页面，用来引流和分享
    2.1 ❌ 不要求登入 然后才能分享
    2.0 设置数据库连接 and 获取数据
    2.2 ✅ counter页面点击分享页面，数据新增一条share记录
    2.2.1 开发share页面 share list
    2.2.2 share detail share/[id]/page
3. ✅ 来个FAQ模块：匹配更多的关键词 优化SEO表现

## 参考资料
- [react icons](https://react-icons.github.io/react-icons/search/#q=vibrate)
- [模仿的竞品](https://tallycount.app/)
- [tailwind](https://tailwindcss.com/docs/text-color)