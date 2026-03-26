import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 须与 GitHub 仓库名在 Pages URL 中的路径完全一致（大小写敏感，错则 CSS/JS 全部 404）
  base: '/loongarch-learning/',
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
          link: '/',
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
          {
            text: '操作系统设计赛',
            collapsed: true,
            items: [
              { text: '往年的比赛的OS Kernel', link: '/competitions/os-design/kernel/' },
              { text: '往年比赛的优秀作品', link: '/competitions/os-design/cases/' },
              { text: '往年比赛的报告', link: '/competitions/os-design/training-reports/' },
              { text: '往年问题的FAQ', link: '/competitions/os-design/faq/' },
            ],
          },
          { text: '编译系统设计赛', link: '/competitions/compiler-design/' },
        ],
      },
      
      {
        text: '龙架构相关文档',
        collapsed: true,
        items: [
          { text: '官方参考手册', link: '/docs-la/' },
          { text: '其他参考手册', link: '/docs-la/others-ref' },
          { text: '指令C语言实现', link: '/docs-la/others-la64-insn' },
          { text: 'LoongArch相关IP', link: '/practice/ip' },
        ],
      },
      
      {
        text: '龙架构工具链',
        collapsed: true,
        items: [
          { text: '常用工具链', link: '/toolchain/compiler' },
          { text: 'libc库', link: '/toolchain/libc' },
          { text: 'Linux内核', link: '/toolchain/linux-kernel' },
          { text: 'U-boot', link: '/toolchain/uboot' },
          { text: 'UEFI', link: '/toolchain/uefi' },
        ],
      },
      
      {
        text: '龙架构开发平台',
        collapsed: true,
        items: [
          { text: '2k1000LA星云版', link: '/platform/2k1000la' },
          { text: '2k0300蜂鸟', link: '/platform/2k0300' },
          { text: '2k3000开发板', link: '/platform/2k3000' },
        ],
      },
      
      {
        text: '龙架构操作系统',
        collapsed: true,
        items: [
          { text: '支持龙架构的发行版', link: '/os/release-os' },
          { text: 'LoongArch开源Kernel', link: '/os/os-kernel' },
          { text: '基于Rust的Kernel', link: '/os/os-kernel' },
        ],
      },
      
      {
        text: '龙架构相关的仓库',
        collapsed: true,
        items: [
          { text: '龙芯实验室', link: '/repos/loongsonlab' },
          { text: '龙芯开源社区', link: '/repos/loongson-community' },
        ],
      },

      {
        text: '其他杂项',
        collapsed: true,
        items: [
          { text: '龙架构相关的论坛', link: '/misc/loong64-form' },
          { text: '开发者相关', link: '/misc/developer' },
          { text: '其他趣闻', link: '/misc/news' },
        ],
      },

      {
        text: '问题反馈',
        collapsed: true,
        items: [
          { text: '如何提问', link: '/feedback/' },
          { text: '实习机会', link: '/feedback/works' },
          { text: '如何联系我们', link: '/feedback/contact' },
        ],
      },

    ],
    socialLinks: [],
  },
})
