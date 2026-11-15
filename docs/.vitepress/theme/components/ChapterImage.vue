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
.chapter-image { max-width: 440px; margin: 32px auto; }
.chapter-image a { display: block; border-radius: 8px; }
.chapter-image a:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 4px; }
.chapter-image img { display: block; width: 100%; height: auto; border-radius: 8px; }
.chapter-image figcaption { margin-top: 10px; color: var(--vp-c-text-2); font-size: 12px; line-height: 1.65; }
@media (max-width: 640px) {
  .chapter-image { width: 88%; margin: 28px auto; }
}
</style>
