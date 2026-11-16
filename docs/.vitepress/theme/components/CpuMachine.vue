<script setup>
import { ref } from 'vue'
import { createCpu, stepCpu, decodeWord } from './computation-models.mjs'
const operation = ref('ADD')
const state = ref(createCpu())
const phases = ['取指', '识别', '执行', '保存']
function reset() { state.value = createCpu(operation.value) }
function step() { state.value = stepCpu(state.value) }
function explain(word, address) {
  if (address >= 4) return ['第一个数', '第二个数', '结果'][address - 4]
  const instruction = decodeWord(word)
  return instruction.name + (instruction.address === null ? '' : ` ${instruction.address}`)
}
</script>

<template>
  <figure class="book-demo cpu-demo" aria-label="四条指令的 CPU 教学机">
    <label class="task-picker">更换程序 <select v-model="operation" @change="reset"><option value="ADD">求和 · 2 + 3</option><option value="SUB">求差 · 2 − 3</option></select></label>
    <div class="cpu-layout">
      <div class="memory-grid" role="table" aria-label="教学机存储器">
        <div class="memory-row memory-head" role="row"><span role="columnheader">地址</span><span role="columnheader">内容</span><span role="columnheader">读法</span></div>
        <div v-for="(word, address) in state.memory" :key="address" class="memory-row" :class="{ accessed: state.active === address, 'next-instruction': address === state.pc && !state.halted }" role="row">
          <span role="cell">{{ address }}</span><strong role="cell">{{ word }}</strong><span role="cell">{{ explain(word, address) }}</span>
        </div>
      </div>
      <div class="cpu-registers">
        <div><span>PC · 下一条地址</span><strong>{{ state.pc }}</strong></div>
        <div><span>IR · 当前指令</span><strong>{{ state.ir === null ? '—' : state.ir }}</strong></div>
        <div><span>ACC · 暂存数值</span><strong>{{ state.acc }}</strong></div>
      </div>
    </div>
    <ol class="cpu-phases" aria-label="下一步所处阶段"><li v-for="(phase, i) in phases" :key="phase" :class="{ current: i === state.phase && !state.halted }" :aria-current="i === state.phase && !state.halted ? 'step' : undefined">{{ phase }}</li></ol>
    <p class="demo-status" aria-live="polite">{{ state.note }}</p>
    <div class="demo-controls"><button type="button" :disabled="state.halted" @click="step">{{ state.halted ? '已停机' : `下一步 · ${phases[state.phase]}` }}</button><button type="button" class="secondary" @click="reset">重新开始</button></div>
    <figcaption>边线标出下一条指令，底色标出本步访问的位置。切换任务会重置机器，只更换地址 1 的指令。</figcaption>
  </figure>
</template>

<style scoped>
.task-picker { display: flex; gap: 12px; align-items: center; font-size: 13px; color: var(--vp-c-text-2); }
.task-picker select { min-height: 44px; padding: 6px 30px 6px 12px; border: 1px solid var(--vp-c-divider); border-radius: 6px; background: var(--vp-c-bg); color: var(--vp-c-text-1); appearance: auto; }
.cpu-layout { display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr); gap: 18px; margin-top: 18px; }
.memory-row { display: grid; grid-template-columns: 38px 52px minmax(0, 1fr); gap: 4px; align-items: center; padding: 5px 8px; border-left: 2px solid transparent; font-size: 12px; line-height: 1.8; font-variant-numeric: tabular-nums; }
.memory-head { color: var(--vp-c-text-2); border-bottom: 1px solid var(--vp-c-divider); }
.memory-row strong { font-weight: 500; font-family: var(--vp-font-family-mono); }
.memory-row.next-instruction { border-left-color: var(--vp-c-brand-1); }
.memory-row.accessed { background: var(--vp-c-brand-soft); border-radius: 3px; }
.cpu-registers { display: flex; flex-direction: column; justify-content: space-between; gap: 8px; }
.cpu-registers > div { border: 1px solid var(--vp-c-divider); border-radius: 6px; padding: 8px 10px; }
.cpu-registers span { display: block; font-size: 11px; color: var(--vp-c-text-2); }
.cpu-registers strong { font-family: var(--vp-font-family-mono); font-size: 20px; font-weight: 500; }
.cpu-demo .cpu-phases { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); list-style: none; padding: 0; margin: 20px 0 0; gap: 6px; }
.cpu-phases li { font-size: 12px; text-align: center; padding-top: 6px; border-top: 2px solid var(--vp-c-divider); color: var(--vp-c-text-2); margin: 0; }
.cpu-phases li.current { color: var(--vp-c-brand-1); border-color: var(--vp-c-brand-1); }
@media (max-width: 420px) {
  .cpu-layout { grid-template-columns: minmax(0, 1fr); gap: 12px; }
  .cpu-registers { flex-direction: row; }
  .cpu-registers > div { flex: 1; min-width: 0; padding: 8px 5px; }
  .cpu-registers span { font-size: 10px; }
}
</style>
