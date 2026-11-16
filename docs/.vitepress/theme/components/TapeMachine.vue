<script setup>
import { ref } from 'vue'
import { createTape, stepTape } from './computation-models.mjs'
const state = ref(createTape())
function step() { state.value = stepTape(state.value) }
function reset() { state.value = createTape() }
</script>

<template>
  <figure class="book-demo" aria-label="在三个 1 后添一个 1 的纸带机器">
    <div class="tape" role="list" aria-label="纸带">
      <div v-for="(symbol, i) in state.tape" :key="i" role="listitem" class="tape-cell" :class="{ scanned: i === state.head }" :aria-label="`第 ${i + 1} 格，${symbol === '□' ? '空白' : symbol}${i === state.head ? '，读头在这里' : ''}`">
        <span>{{ symbol }}</span><small>{{ i === state.head ? '读头' : '　' }}</small>
      </div>
    </div>
    <div class="tape-state"><span>状态 · {{ state.halted ? '停机' : '扫描' }}</span><span>已走 {{ state.steps }} 步</span></div>
    <p class="demo-status" aria-live="polite">{{ state.note }}</p>
    <div class="demo-controls"><button type="button" :disabled="state.halted" @click="step">走一步</button><button type="button" class="secondary" @click="reset">重新开始</button></div>
    <figcaption>空白用 □ 表示。这里的 111 表示三个，每个 1 都占一格。</figcaption>
  </figure>
</template>

<style scoped>
.tape { display: flex; justify-content: center; gap: 6px; padding-top: 8px; }
.tape-cell { flex: 1; max-width: 64px; text-align: center; }
.tape-cell span { display: block; border: 1px solid var(--vp-c-divider); border-radius: 6px; padding: 8px 0; font-family: var(--vp-font-family-mono); font-size: 23px; background: var(--vp-c-bg); transition: background-color .2s; }
.tape-cell.scanned span { border-color: var(--vp-c-brand-1); background: var(--vp-c-brand-soft); }
.tape-cell small { font-size: 11px; color: var(--vp-c-brand-1); }
.tape-state { display: flex; justify-content: space-between; font-size: 12px; color: var(--vp-c-text-2); margin-top: 12px; }
@media (prefers-reduced-motion: reduce) { .tape-cell span { transition: none; } }
</style>
