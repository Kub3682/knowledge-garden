<script setup>
import { computed, ref } from 'vue'
import { offloadCost } from './computation-models.mjs'
const count = ref(4)
const cost = computed(() => offloadCost(count.value))
const scale = computed(() => Math.max(cost.value.cpu, cost.value.total))
const width = value => `${value / scale.value * 100}%`
</script>

<template>
  <figure class="book-demo offload-demo" aria-label="比较本地计算与交给加速器的完整耗时">
    <label for="offload-count">一次处理多少项 <output>{{ count }}</output></label>
    <input id="offload-count" v-model.number="count" type="range" min="1" max="32" step="1">
    <div class="cost-row"><div><span>CPU 直接算</span><strong>{{ cost.cpu }} μs</strong></div><div class="cost-track"><span class="cost-cpu" :style="{ width: width(cost.cpu) }"></span></div></div>
    <div class="cost-row"><div><span>交给加速器</span><strong>{{ cost.total }} μs</strong></div><div class="cost-track"><span class="cost-setup" :style="{ width: width(cost.setup) }"></span><span class="cost-transfer" :style="{ width: width(cost.transfer) }"></span><span class="cost-compute" :style="{ width: width(cost.compute) }"></span></div></div>
    <div class="cost-legend"><span>提交 12</span><span>传入与取回 12</span><span>运算 {{ count }}</span></div>
    <p class="demo-status" aria-live="polite">{{ cost.cpu === cost.total ? '8 项时，完整耗时相同。' : cost.cpu < cost.total ? '任务较小，提交与搬运的成本还没摊开。' : '一次多算一些，才把更快运算的好处显出来。' }}</p>
    <figcaption>假设 CPU 每项 4 μs，加速器每项 1 μs，提交与搬运共 24 μs，各阶段依次进行。数值为教学设定。</figcaption>
  </figure>
</template>

<style scoped>
.offload-demo label { display: flex; justify-content: space-between; font-size: 13px; }
.offload-demo output { font-variant-numeric: tabular-nums; color: var(--vp-c-brand-1); }
.offload-demo input { display: block; width: 100%; min-height: 44px; margin: 8px 0 18px; accent-color: var(--vp-c-brand-1); }
.cost-row { margin-top: 16px; }
.cost-row > div:first-child { display: flex; justify-content: space-between; font-size: 12px; }
.cost-row strong { font-weight: 500; }
.cost-track { display: flex; margin-top: 7px; height: 12px; background: var(--vp-c-bg); overflow: hidden; border-radius: 3px; }
.cost-track > span { display: block; height: 100%; transition: width .15s; }
.cost-cpu { background: #687c9f; }
.cost-setup { background: #b9a782; }
.cost-transfer { background: #8baaa3; }
.cost-compute { background: #6678b8; }
.cost-legend { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 12px; font-size: 11px; color: var(--vp-c-text-2); }
.cost-legend span::before { content: ''; display: inline-block; width: 7px; height: 7px; border-radius: 2px; margin-right: 5px; background: #b9a782; }
.cost-legend span:nth-child(2)::before { background: #8baaa3; }
.cost-legend span:nth-child(3)::before { background: #6678b8; }
@media (prefers-reduced-motion: reduce) { .cost-track > span { transition: none; } }
</style>
