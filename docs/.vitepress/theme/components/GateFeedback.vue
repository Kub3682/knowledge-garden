<script setup>
import { ref } from 'vue'

const stages = [
  { animal: '栏内', gate: '打开', decision: '等待', note: '初始观测显示门口空着。' },
  { animal: '栏内', gate: '关闭中', decision: '开始关门', note: '门开始移动。此时门口仍空着。' },
  { animal: '门口', gate: '暂停', decision: '停止关门', note: '羊走回门口。新的观测让控制器暂停动作。' },
  { animal: '栏内', gate: '关闭中', decision: '重新确认后继续', note: '羊退回栏内，确认门口已腾空，继续关门。' },
  { animal: '栏内', gate: '已关', decision: '确认结束', note: '再次读到门的位置，确认关门已完成。' }
]
const step = ref(0)
</script>

<template>
  <figure class="book-demo" aria-label="栏门反馈的分步示意">
    <div class="gate-states">
      <div><span class="visual-label">观测到羊在</span><strong>{{ stages[step].animal }}</strong></div>
      <div><span class="visual-label">当前门状态</span><strong>{{ stages[step].gate }}</strong></div>
      <div><span class="visual-label">本步决定</span><strong>{{ stages[step].decision }}</strong></div>
    </div>
    <p class="demo-status" aria-live="polite">{{ stages[step].note }}</p>
    <div class="demo-controls">
      <button type="button" :disabled="step === stages.length - 1" @click="step++">看下一步</button>
      <button type="button" class="secondary" @click="step = 0">重来</button>
    </div>
    <figcaption>这是教学示意。真实栏门还需要独立防夹、可靠传感器与人工接管。</figcaption>
  </figure>
</template>

<style scoped>
.gate-states { display: grid; grid-template-columns: 1fr 1fr 1.3fr; gap: 8px; }
.gate-states > div { padding: 10px 8px; border: 1px solid var(--vp-c-divider); border-radius: 6px; background: var(--vp-c-bg); }
.gate-states strong { display: block; font-size: 14px; line-height: 1.55; margin-top: 4px; }
</style>
