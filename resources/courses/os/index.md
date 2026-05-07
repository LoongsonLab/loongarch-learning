---
title: 操作系统
outline: deep
---

# 操作系统

## 课程一：深入理解操作系统（基于 LoongArch+Linux）

### 课程视频

<div class="os-nowrap">

| 课程标题 | 授课老师 | 链接 | 说明 |
|----------|----------|------|------|
| 深入理解操作系统 | 宫晓利（南开大学） | [点击观看](https://space.bilibili.com/1339327684/lists/2275415?type=season) | LoongArch+Linux 两阶段实验 |

### 教材

| 封面 | 书名 | 作者 | 购买链接 |
|------|------|------|----------|
| <img src="/book-OS-Understanding.png" alt="深入理解计算机操作系统" class="book-cover" /> | 《深入理解计算机操作系统》 | 宫晓利、张金 | [点击购买](https://item.jd.com/15252844.html) |

### 配套资源

| 类型 | 链接 |
|------|------|
| 源代码 | [点击获取](https://github.com/NKU-EmbeddedSystem/OSbook) |

## 课程二：操作系统设计与实现——Maque教学操作系统

### 课程视频

| 课程标题 | 授课老师 | 链接 | 说明 |
|----------|----------|------|------|
| 操作系统设计与实现：基于 MaQue 教学操作系统 | 周庆国（兰州大学） | [点击观看](https://www.bilibili.com/video/BV1EH4y1c7WX/) | LoongArch+MaQueOS 设计与实现 |

### 教材

| 封面 | 书名 | 作者 | 购买链接 | 配套实验代码 |
|------|------|------|----------|----------|
| <img src="/book-OS-DesignImpl.jpg" alt="操作系统设计与实现" class="book-cover" /> | 《操作系统设计<br/>基于LoongArch架构》 | 周庆国、杨虎斌、刘刚<br/>陈玉聪、张福新 | [点击购买](https://item.jd.com/14559546.html) | [点击获取](https://gitee.com/dslab-lzu/maqueos) |

### 配套资源

| 类型 | 链接 |
|------|------|
| 仓库地址 | [点击跳转](https://github.com/LoongsonLab/maqueos/) |
| 实验指导书 | [点击跳转](https://github.com/LoongsonLab/maqueos/blob/main/doc/%E5%AE%9E%E9%AA%8C%E6%8C%87%E5%AF%BC%E4%B9%A6.pdf) |

## 课程三：《操作系统内核构建》——NPUcore教学操作系统

### 教材

| 封面 | 书名 | 作者 | 购买链接 |
|------|------|------|----------|
| <img src="/book-OS-Kernel.png" alt="操作系统内核构建" class="book-cover" /> | 《操作系统内核构建》 | 张羽、郭琼、张福新 | 待上线 |

### 配套资源

| 类型 | 链接 |
|------|------|
| 源代码 | [点击获取](https://gitlab.eduxiji.net/T202410699992491/oskernel2024-npucore) |


## 课程四：Ucore教学操作系统

### 课程视频

<div class="os-table-single-line">

| 课程标题 | 链接 | 配套课件PPT | 说明 |
|----------|------|------|-----------|
| Ucore for LoongArch32操作系统实验 | [点击观看](https://space.bilibili.com/12553542/lists/2666036?type=series) | [点击跳转](https://github.com/LoongsonLab/ucore-loongarch32/tree/master/doc) | 重庆大学陈咸彰老师团队开发 |

</div>

### 配套资源

| 类型 | 链接 |
|------|------|
| 实验指导书 | [点击获取](https://cyyself.github.io/ucore_la32_docs/) |
| uCore移植实验代码 | [点击获取](https://github.com/LoongsonLab/ucore-loongarch64) |
| 头哥实验平台 | [点击获取](https://www.educoder.net/paths/gsnk6w9t) |


## 课程四：MOS教学操作系统

### 课程资源

| 类型 | 链接 |
|------|------|
| 实验教学PPT | [点击获取](https://github.com/LoongsonLab/buaa-oskernel-for-loongarch/tree/main/doc) |
| 实验指导书 | [点击获取](https://github.com/LoongsonLab/buaa-oskernel-for-loongarch/blob/main/doc/LA32R%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%AE%9E%E9%AA%8C%E6%8C%87%E5%AF%BC%E6%89%8B%E5%86%8C.pdf) |
| 实验代码 | [点击获取](https://github.com/LoongsonLab/buaa-oskernel-for-loongarch/tree/main/lab1) |
</div>

如在学习过程中遇到问题或有改进建议，欢迎通过 [问题反馈](/feedback/) 联系我们。

<style>
.book-cover { max-height: 100px; width: auto; display: block; }
.os-nowrap table th,
.os-nowrap table td {
  white-space: nowrap;
}
.os-nowrap table td:nth-child(1) {
  white-space: normal;
}
.os-nowrap table td:nth-child(4) {
  white-space: normal;
}
.os-nowrap .os-table-single-line table th,
.os-nowrap .os-table-single-line table td {
  white-space: nowrap;
}

/* 去掉 VitePress 默认在 table 上的横向滚动条，并压缩排版以尽量单行铺满内容区 */
.vp-doc .os-table-single-line table {
  display: table;
  width: 100%;
  max-width: 100%;
  overflow-x: visible;
}

.vp-doc .os-table-single-line th,
.vp-doc .os-table-single-line td {
  padding: 6px 8px;
  font-size: 0.8125rem;
}
</style>
