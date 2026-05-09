import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import NavLinkWithIcon from './components/NavLinkWithIcon.vue'
import './sidebar-divider.css'
import './sidebar-collapse.css'
import './home-hero-bg.css'
import './home-overview.css'
import './layout-responsive.css'
import './navbar-title-overflow.css'
import './training-reports.css'
import './kernel-page.css'
import './past-loongson-topics.css'
import './cases-page.css'
import './docs-la-index.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('NavLinkWithIcon', NavLinkWithIcon)
    // 在客户端注入侧栏分隔线样式，确保覆盖默认 scoped 样式
    if (typeof document !== 'undefined') {
      const style = document.createElement('style')
      style.textContent = `
        .VPSidebar .nav .group + .group,
        .VPSidebar #VPSidebarNav .group + .group {
          border-top: 1px solid var(--vp-c-divider);
          padding-top: 10px;
        }
        .VPSidebar .nav .group:nth-child(4),
        .VPSidebar #VPSidebarNav .group:nth-child(4) {
          border-top: 1px solid var(--vp-c-divider);
          padding-top: 10px;
        }
        .VPNavBarTitle .title .logo {
          margin-right: 8px;
          height: 28px;
          width: auto;
          object-fit: contain;
          flex-shrink: 0;
        }
      `
      document.head.appendChild(style)
    }

    // 进入竞赛相关页面时：默认把 details 全部展开（满足“进入页面就要打开”）
    if (typeof window !== 'undefined') {
      app.mixin({
        mounted() {
          const path = window.location?.pathname || ''
          const storeKey = '__loongson_open_details_last_path__'
          if (window[storeKey] === path) return
          window[storeKey] = path

          const selectors = [
            '.training-reports-page details',
            '.kernel-projects-page details',
            '.past-loongson-topics-page details',
            // cases.md 目前已经改成“展开列表”为主，但保留兜底
            '.cases-page details',
          ]

          selectors.forEach((sel) => {
            document.querySelectorAll(sel).forEach((d) => {
              if (d.closest('.docs-la-ref-manuals')) return
              d.open = true
            })
          })

          // past-loongson-topics：要求 2024 年的折叠块进入页面时保持合上
          if (path.includes('/competitions/os-design/past-loongson-topics/')) {
            const yearHead = Array.from(document.querySelectorAll('h2')).find((h) => {
              const t = (h.textContent || '').trim()
              return t.startsWith('2024')
            })

            if (yearHead) {
              // 收集 yearHead 后直到下一个 h2 之间的 details
              const toClose = []
              let node = yearHead.nextElementSibling
              while (node && node.tagName !== 'H2') {
                const ds = node.querySelectorAll?.('details') || []
                ds.forEach((d) => toClose.push(d))
                node = node.nextElementSibling
              }
              toClose.forEach((d) => {
                d.open = false
              })
            }
          }
        },
      })
    }
  }
}
