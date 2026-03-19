<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { ref, watch, onMounted, onUnmounted } from 'vue'

const SIDEBAR_COLLAPSED_KEY = 'loongson-sidebar-collapsed'

const isCollapsed = ref(false)
const route = useRoute()

function applyCollapsedFromStorage() {
  if (typeof localStorage !== 'undefined') {
    isCollapsed.value = localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === '1'
  }
}

function onOpenSidebar() {
  isCollapsed.value = false
}

onMounted(() => {
  applyCollapsedFromStorage()
  window.addEventListener('loongson-open-sidebar', onOpenSidebar)
})

onUnmounted(() => {
  window.removeEventListener('loongson-open-sidebar', onOpenSidebar)
})

watch(() => route.path, () => {
  applyCollapsedFromStorage()
})

watch(isCollapsed, (v) => {
  if (typeof localStorage !== 'undefined') {
    if (v) localStorage.setItem(SIDEBAR_COLLAPSED_KEY, '1')
    else localStorage.removeItem(SIDEBAR_COLLAPSED_KEY)
  }
})
</script>

<template>
  <div class="layout-wrapper">
    <button
      v-if="isCollapsed"
      type="button"
      class="sidebar-expand-btn sidebar-expand-btn--left"
      @click="isCollapsed = false"
      aria-label="展开侧栏"
      title="展开侧栏"
    >
      <span class="btn-icon" aria-hidden="true">›</span>
    </button>
    <DefaultTheme.Layout :class="{ 'sidebar-collapsed': isCollapsed }">
      <template #sidebar-nav-before>
        <div class="sidebar-collapse-wrap">
          <button
            type="button"
            class="sidebar-collapse-btn"
            @click="isCollapsed = true"
            aria-label="收起侧栏"
            title="收起侧栏"
          >
            <span class="btn-icon" aria-hidden="true">‹</span>
          </button>
        </div>
      </template>
    </DefaultTheme.Layout>
  </div>
</template>

<style scoped>
.sidebar-collapse-wrap {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
  padding-right: 4px;
}

.sidebar-collapse-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  color: var(--vp-c-text-3);
  background: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.45;
  transition: opacity 0.2s ease, color 0.2s ease, background 0.2s ease;
}

.sidebar-collapse-btn:hover {
  opacity: 1;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
}

.sidebar-collapse-btn .btn-icon {
  font-size: 18px;
  font-weight: 300;
  line-height: 1;
}

.layout-wrapper {
  position: relative;
}

.sidebar-expand-btn--left {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: var(--vp-z-index-sidebar);
  width: 20px;
  height: 56px;
  padding: 0;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
  border: none;
  border-left: none;
  border-radius: 0 8px 8px 0;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease, color 0.2s ease, background 0.2s ease, width 0.2s ease;
}

.sidebar-expand-btn--left:hover {
  opacity: 1;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  width: 24px;
}

.sidebar-expand-btn--left .btn-icon {
  font-size: 16px;
  font-weight: 300;
  line-height: 1;
}

.dark .sidebar-expand-btn--left {
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.25);
}
</style>
