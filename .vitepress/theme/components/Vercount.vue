<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()
const pagePV = ref('Loading')

async function fetchPagePV() {
  pagePV.value = 'Loading'
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5000)
    const res = await fetch('https://events.vercount.one/api/v2/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: window.location.href }),
      signal: controller.signal
    })
    clearTimeout(timeout)
    if (!res.ok) return
    const json = await res.json()
    const data = json.status === 'success' && json.data ? json.data : json.data || {}
    if (data.page_pv !== undefined) pagePV.value = String(data.page_pv)
  } catch (e) {
    pagePV.value = '-'
  }
}

// 监听 page.relativePath 变化（VitePress alpha 兼容）
import { watch } from 'vue'
watch(() => page.value.relativePath, () => {
  fetchPagePV()
}, { immediate: true })
</script>

<template>
  <div class="vercount-container">
    <span class="vercount-text">
      本页阅读量 <span class="vercount-pv">{{ pagePV }}</span> 次
    </span>
  </div>
</template>

<style scoped>
.vercount-container {
  display: flex;
  align-items: center;
  padding: 0.75rem 0 0.5rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.vercount-pv {
  font-weight: 600;
  color: var(--vp-c-brand-1);
  margin: 0 0.15rem;
}
</style>
