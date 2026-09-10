---
title: 友情链接
date: 2026-09-10 18:15:00
comments: true
---

<style>
.friend-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin: 1.5rem 0 2.5rem 0;
}
.friend-card {
  display: flex;
  align-items: center;
  padding: 14px 16px;
  background-color: #FFFFFF;
  border: 1px solid #E5E2DA;
  border-radius: 4px;
  text-decoration: none !important;
  color: #1F1E1D !important;
  transition: all 0.25s ease;
  box-sizing: border-box;
}
.friend-card::after,
.friend-card::before {
  display: none !important;
  content: none !important;
}
.friend-card .fa-external-link-alt,
.friend-card svg,
.friend-card .svg-inline--fa {
  display: none !important;
}
.friend-card:hover {
  border-color: #93B259;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(147, 178, 89, 0.12);
}
.friend-avatar {
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 14px;
  border: 1px solid #E5E2DA;
  transition: transform 0.3s ease;
  display: block;
}
.friend-card:hover .friend-avatar {
  transform: scale(1.05);
}
.friend-info {
  flex: 1;
  min-width: 0;
}
.friend-name {
  font-size: 1rem;
  font-weight: 600;
  color: #1F1E1D;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s ease;
}
.friend-card:hover .friend-name {
  color: #93B259;
}
.friend-desc {
  font-size: 0.82rem;
  color: rgba(31, 30, 29, 0.65);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}
.friend-exchange-box {
  margin: 1rem 0;
  padding: 14px 18px;
  background-color: rgba(31, 30, 29, 0.02);
  border: 1px solid #E5E2DA;
  border-left: 3px solid #93B259;
  border-radius: 0 4px 4px 0;
  font-size: 0.92rem;
  line-height: 1.8;
}
</style>

<div class="friend-links-grid">
  <a class="friend-card" href="https://charlore.cn" target="_blank" rel="noopener noreferrer">
    <img class="friend-avatar" src="https://assets.charlore.cn/images/charlore/profile-avatar.jpg" alt="Charloré's Blog" loading="lazy" onerror="this.src='/favicon.png'">
    <div class="friend-info">
      <div class="friend-name">Charloré's Blog</div>
      <div class="friend-desc">We are all in the gutter, but some of us are looking at the stars.</div>
    </div>
  </a>
</div>

---

### 交换友链说明

如果你想与本站交换友链，请先将本站加入你的友链列表，然后在下方 **评论区** 留言申请。

#### 本站信息

<div class="friend-exchange-box">
<div><strong>Name：</strong>Trevor's Blog</div>
<div><strong>Link：</strong>https://trevoewu.github.io</div>
<div><strong>Avatar：</strong>https://trevoewu.github.io/favicon.png</div>
<div><strong>Desc：</strong>Trevor's personal blog.</div>
</div>

#### 申请格式

```yaml
- Name: 你的博客名称
  Link: 你的博客网址 (需支持 HTTPS)
  Avatar: 你的头像链接
  Desc: 一句简短的博客描述
```
