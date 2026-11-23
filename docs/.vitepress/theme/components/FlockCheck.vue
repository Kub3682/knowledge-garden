<script setup>
import { computed, ref } from 'vue'

const original = Array.from({ length: 12 }, (_, index) => `A${String(index + 1).padStart(2, '0')}`)
const swapped = ref(false)
const returned = computed(() => original.map(tag => swapped.value && tag === 'A07' ? 'B07' : tag))
</script>

<template>
  <figure class="book-demo" aria-label="比较两份数量相同的耳标记录">
    <div class="tag-record">
      <span class="visual-label">早晨出栏 · 12 只</span>
      <div class="tag-grid"><span v-for="tag in original" :key="tag" class="visual-chip">{{ tag }}</span></div>
    </div>
    <div class="tag-record">
      <span class="visual-label">傍晚归栏 · 12 只</span>
      <div class="tag-grid">
        <span v-for="tag in returned" :key="tag" class="visual-chip" :class="{ changed: tag === 'B07' }">{{ tag }}</span>
      </div>
    </div>
    <p class="demo-status" aria-live="polite">{{ swapped ? '总数仍是 12。A07 不在归栏名单里，多了一只 B07。' : '总数相等，每一个耳标也都对上了。' }}</p>
    <div class="demo-controls"><button type="button" @click="swapped = !swapped">{{ swapped ? '换回原来的羊' : '让 B07 混进来' }}</button></div>
    <figcaption>比较数量只需要两个数。比较身份需要两份名单。</figcaption>
  </figure>
</template>

<style scoped>
.tag-record + .tag-record { margin-top: 18px; }
.tag-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 6px; margin-top: 8px; }
.visual-chip { text-align: center; }
.changed { color: var(--vp-c-brand-1); border-color: var(--vp-c-brand-1); background: var(--vp-c-brand-soft); font-weight: 700; }
@media (max-width: 400px) { .tag-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
</style>
