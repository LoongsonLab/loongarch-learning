<script setup>
import { useRoute, withBase } from 'vitepress'
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  link: { type: String, required: true },
  // 二选一：传入 icon 类（vpi-xxx），或传入 image 路径
  icon: { type: String, required: false },
  image: { type: String, required: false },
})

const route = useRoute()
const isActiveLink = computed(() => {
  const path = route.path.replace(/\/$/, '') || '/'
  const link = props.link.replace(/\/$/, '') || '/'
  return path === link || (link !== '/' && path.startsWith(link))
})
const href = computed(() => withBase(props.link))
const imageSrc = computed(() => props.image ? withBase(props.image) : '')
</script>

<template>
  <a :href="href" :class="['nav-link-with-icon', { active: isActiveLink }]">
    <span v-if="image" class="nav-icon nav-icon-img" aria-hidden="true">
      <img :src="imageSrc" alt="" />
    </span>
    <span v-else-if="icon" :class="['nav-icon', icon]" aria-hidden="true" />
    <span v-html="text" />
  </a>
</template>

<style scoped>
.nav-link-with-icon {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 12px;
  line-height: var(--vp-nav-height);
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.25s;
}

.nav-link-with-icon:hover {
  color: var(--vp-c-brand-1);
}

.nav-link-with-icon.active {
  color: var(--vp-c-brand-1);
}

.nav-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  flex-shrink: 0;
  opacity: 0.9;
}

.nav-icon-img img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}
</style>
