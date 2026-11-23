<script setup>
import { computed, ref } from 'vue'

const motion = ref('enter')
const scenes = computed(() => motion.value === 'enter' ? ['栏外', '门口', '栏内'] : ['栏外', '门口', '栏外'])
</script>

<template>
  <figure class="book-demo" aria-label="对照进栏和折返的三个时刻">
    <div class="demo-controls" role="group" aria-label="选择经过栏门的方式">
      <button type="button" :class="{ secondary: motion !== 'enter' }" :aria-pressed="motion === 'enter'" @click="motion = 'enter'">穿过门口</button>
      <button type="button" :class="{ secondary: motion !== 'turn' }" :aria-pressed="motion === 'turn'" @click="motion = 'turn'">门口折返</button>
    </div>
    <ol class="frames">
      <li v-for="(position, index) in scenes" :key="index">
        <span class="visual-label">第 {{ index + 1 }} 帧</span>
        <div class="frame" :class="{ shared: index === 1 }">
          <span v-for="zone in ['栏外', '门口', '栏内']" :key="zone" class="spot" :class="{ occupied: zone === position }" aria-hidden="true">{{ zone === position ? '●' : '' }}</span>
        </div>
        <strong>{{ position }}</strong>
      </li>
    </ol>
    <p class="demo-status" aria-live="polite">{{ motion === 'enter' ? '栏外 → 门口 → 栏内。记下一次归栏。' : '栏外 → 门口 → 栏外。这次没有归栏。' }}</p>
    <figcaption>两次的第二帧一样。沿时间轴比较，才看得出差别。圆点示意羊的位置。</figcaption>
  </figure>
</template>

<style scoped>
.book-demo .frames { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; list-style: none; margin: 18px 0 0; padding: 0; }
.frames li { margin: 0; text-align: center; }
.frames strong { font-size: 12px; font-weight: 550; }
.frame { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); min-height: 46px; margin-top: 6px; border: 1px solid var(--vp-c-divider); border-radius: 6px; background: var(--vp-c-bg); }
.frame.shared { border-color: var(--vp-c-brand-1); }
.spot { display: grid; place-items: center; color: var(--vp-c-brand-1); }
.spot:nth-child(2) { border-inline: 1px dashed var(--vp-c-divider); }
</style>
