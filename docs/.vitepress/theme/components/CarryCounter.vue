<script setup>
import { computed, ref } from 'vue'
const count = ref(9)
const carried = ref(false)
const digits = computed(() => String(count.value).padStart(2, '0').split(''))
function add() {
  if (count.value >= 12) return
  carried.value = count.value % 10 === 9
  count.value++
}
function reset() { count.value = 9; carried.value = false }
</script>

<template>
  <figure class="book-demo carry-demo" aria-label="十进位联动示意">
    <div class="carry-digits">
      <div v-for="(digit, i) in digits" :key="i" class="digit-wheel" :class="{ changed: carried }">
        <span>{{ i === 0 ? '十位' : '个位' }}</span><strong :key="count">{{ digit }}</strong>
      </div>
    </div>
    <p class="demo-status" aria-live="polite">{{ carried ? '个位从 9 回到 0，同时推动十位加一。' : count === 9 ? '现在是 09。再加一，两个数位会怎样变化？' : `现在是 ${count}。这一步只改变个位。` }}</p>
    <div class="demo-controls"><button type="button" :disabled="count >= 12" @click="add">加一</button><button type="button" class="secondary" @click="reset">回到 09</button></div>
    <figcaption>把“满十进一”做成数位之间的联动。此处展示规则与结果。</figcaption>
  </figure>
</template>

<style scoped>
.carry-demo { max-width: 440px; margin-inline: auto; }
.carry-digits { display: flex; justify-content: center; gap: 28px; padding: 12px 0; }
.digit-wheel { width: 84px; padding: 12px; text-align: center; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg); }
.digit-wheel span { display: block; color: var(--vp-c-text-2); font-size: 12px; }
.digit-wheel strong { display: block; font-size: 42px; line-height: 1.5; font-weight: 500; font-variant-numeric: tabular-nums; }
.digit-wheel.changed { border-color: var(--vp-c-brand-1); }
@media (prefers-reduced-motion: no-preference) { .digit-wheel strong { animation: settle .25s ease-out; } }
@keyframes settle { from { opacity: .3; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
</style>
