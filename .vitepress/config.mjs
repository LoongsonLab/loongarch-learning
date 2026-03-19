import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/loongArch-learning/',
  title: '龙芯实验室',
  description: '龙芯实验室介绍',
  themeConfig: {
    // 顶部左上角：使用 bulb 图标作为实验室 logo（PNG）
    logo: { src: '/bulb.png', alt: '龙芯实验室' },
    sidebarMenuLabel: '菜单',
    nav: [
      {
        component: 'NavLinkWithIcon',
        props: {
          text: 'LA资源总览',
          link: '/docs/',
          image: '/book.png',
        },
      },
      {
        component: 'NavLinkWithIcon',
        props: {
          text: '问题反馈',
          link: '/feedback/',
          image: '/chat.png',
        },
      },
    ],
    sidebar: [
      {
        text: '教学资源',
        collapsed: true,
        items: [
          { text: '计算机系统', link: '/resources/courses/intro/' },
          { text: '计算机组成原理/体系结构', link: '/resources/courses/arch/' },
          { text: '操作系统', link: '/resources/courses/os/' },
          { text: '编译原理', link: '/resources/courses/compiler/' },
        ],
      },
      {
        text: '竞赛资源',
        collapsed: true,
        items: [
          { text: '操作系统设计赛', link: '/competitions/os-design/' },
          { text: '编译系统设计赛', link: '/competitions/compiler-design/' },
        ],
      },
      {
        text: '文档与工具',
        collapsed: true,
        items: [
          { text: '参考手册', link: '/docs-la/' },
          { text: 'LA工具链', link: '/toolchain/' },
          { text: 'LA相关IP', link: '/practice/ip' },
          { text: 'LA开源OS', link: '/practice/os' },
        ],
      },
    ],
    socialLinks: [],
  },
})
