<script setup>
import { withBase } from 'vitepress'

defineProps({
  file: { type: String, required: true },
  alt: { type: String, required: true },
  caption: { type: String, required: true },
  eager: { type: Boolean, default: false }
})
</script>

<template>
  <figure class="chapter-image">
    <a :href="withBase('/images/' + file)" target="_blank" rel="noopener" :aria-label="alt + '，在新标签页查看原图'">
      <img
        :src="withBase('/images/' + file)"
        :alt="alt"
        width="1536"
        height="1024"
        :loading="eager ? 'eager' : 'lazy'"
        decoding="async"
      >
    </a>
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.chapter-image { margin: 28px 0; }
.chapter-image a { display: block; border-radius: 8px; }
.chapter-image a:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 4px; }
.chapter-image img { display: block; width: 100%; height: auto; border-radius: 8px; }
.chapter-image figcaption { margin-top: 10px; color: var(--vp-c-text-2); font-size: 13px; line-height: 1.8; }
</style>
