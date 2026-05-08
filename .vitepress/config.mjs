import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 须与 GitHub 仓库名在 Pages URL 中的路径完全一致（大小写敏感，错则 CSS/JS 全部 404）
  base: '/loongarch-learning/',
  title: '龙架构核心系统能力资源',
  description: '龙芯实验室介绍',
  // 关闭深浅色切换，站点固定为浅色模式
  appearance: false,
  themeConfig: {
    // 顶部左上角：使用 bulb 图标作为实验室 logo（PNG）
    logo: { src: '/bulb.png', alt: '龙芯实验室' },
    sidebarMenuLabel: '菜单',
    nav: [
      {
        component: 'NavLinkWithIcon',
        props: {
          text: '资源总览',
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
        collapsed: false,
        items: [
          { text: '计算机系统', link: '/resources/courses/intro/' },
          { text: '计算机组成原理/体系结构', link: '/resources/courses/arch/' },
          { text: '操作系统', link: '/resources/courses/os/' },
          { text: '编译原理', link: '/resources/courses/compiler/' },
        ],
      },
      
      {
        text: '竞赛资源',
        collapsed: false,
        items: [
          {
            text: '操作系统设计赛',
            collapsed: false,
            items: [
              { text: '历年参赛OS内核', link: '/competitions/os-design/kernel/' },
              { text: '历年获奖作品', link: '/competitions/os-design/cases/' },
              { text: '历年培训报告', link: '/competitions/os-design/training-reports/' },
              { text: '历年龙芯赛题', link: '/competitions/os-design/past-loongson-topics/' },
              { text: '常见问题FAQ', link: '/competitions/os-design/faq/' },
            ],
          },
          {
            text: '编译系统设计赛',
            collapsed: false,
            items: [
              { text: '历年培训报告', link: '/competitions/compiler-design/training-reports/' },
              { text: '历年龙芯赛题', link: '/competitions/compiler-design/past-loongson-topics/' },
            ],
          },
        ],
      },
      
      {
        text: '龙架构相关文档',
        collapsed: false,
        items: [
          { text: '官方参考手册', link: '/docs-la/' },
          { text: '其他参考手册', link: '/docs-la/others-ref' },
        ],
      },
      
      {
        text: '龙架构基础软件',
        collapsed: false,
        items: [
          { text: 'LoongArch工具链', link: '/toolchain/compiler' },
          { text: 'LoongArch模拟器', link: '/docs-la/others-la64-insn' },
          { text: 'libc库', link: '/toolchain/libc' },
          { text: 'Linux内核', link: '/toolchain/linux-kernel' },
          { text: 'U-boot', link: '/toolchain/uboot' },
          { text: 'UEFI', link: '/toolchain/uefi' },
        ],
      },
      
      {
        text: '龙架构开发平台',
        collapsed: false,
        items: [
          { text: '2k1000LA星云板', link: '/platform/2k1000la' },
          { text: '2k0300蜂鸟板', link: '/platform/2k0300' },
          { text: '2k3000开发板', link: '/platform/2k3000' },
        ],
      },
      
      {
        text: '龙架构操作系统',
        collapsed: false,
        items: [
          { text: 'LoongArch教学OS', link : '/os/os-edu'},
          { text: 'LoongArch开源Kernel', link: '/os/os-kernel' },
          { text: '支持龙架构的linux发行版', link: '/os/release-os' },
        ],
      },
      
      {
        text: '龙架构相关的仓库',
        collapsed: false,
        items: [
          { text: '龙芯实验室', link: '/repos/loongsonlab' },
          { text: '龙芯开源社区', link: '/repos/loongson-community' },
        ],
      },

      {
        text: '其他杂项',
        collapsed: false,
        items: [
          { text: '交流论坛', link: '/misc/loong64-form' },
          { text: '资源网站', link: '/misc/developer' },
        ],
      },

      {
        text: '问题反馈',
        collapsed: false,
        items: [
          { text: '如何提问', link: '/feedback/' },
          { text: '实习机会', link: '/feedback/works' },
          { text: '如何联系我们', link: '/feedback/contact' },
        ],
      },

    ],

    // 全站本地搜索（索引构建后的正文，无需 Algolia）
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '打开搜索',
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除',
            backButtonTitle: '返回',
            noResultsText: '未找到相关结果',
            footer: {
              selectText: '跳转',
              selectKeyAriaLabel: '按 Enter 打开',
              navigateText: '切换结果',
              navigateUpKeyAriaLabel: '向上',
              navigateDownKeyAriaLabel: '向下',
              closeText: '关闭',
              closeKeyAriaLabel: '按 Esc 关闭',
            },
          },
        },
      },
    },

    socialLinks: [],
  },
})
