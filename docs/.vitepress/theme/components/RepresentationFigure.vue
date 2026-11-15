<script setup>
defineProps({
  count: { type: Number, default: 12 }
})
</script>

<template>
  <figure class="representation-figure" :aria-label="count + '只羊可以用相同数量的石子或数字记录'">
    <div class="representation-stages">
      <div class="representation-stage">
        <div class="representation-mark flock" aria-hidden="true">
          <svg v-for="n in count" :key="n" viewBox="0 0 32 24">
            <ellipse cx="14" cy="11" rx="10" ry="7" />
            <ellipse cx="26" cy="12" rx="4" ry="5" />
            <path d="M8 16v6m12-6v6M25 8l2-4" />
          </svg>
        </div>
        <div class="stage-label">羊群</div>
        <div class="stage-note">要核对的对象</div>
      </div>
      <div class="representation-stage">
        <div class="representation-mark pebbles" aria-hidden="true">
          <span v-for="n in count" :key="n"></span>
        </div>
        <div class="stage-label">石子</div>
        <div class="stage-note">一颗对应一只</div>
      </div>
      <div class="representation-stage">
        <div class="representation-mark notation">
          <span>羊</span><span class="notation-count">{{ count }}</span>
        </div>
        <div class="stage-label">数字记录</div>
        <div class="stage-note">类别与数量</div>
      </div>
    </div>
    <figcaption>同一个数量，三种表示</figcaption>
  </figure>
</template>

<style scoped>
.representation-figure {
  margin: 28px 0 12px;
  padding: 20px 0 12px;
  border-block: 1px solid var(--vp-c-divider);
}
.representation-stages {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}
.representation-stage { display: flex; flex-direction: column; align-items: center; }
.representation-mark {
  height: 100px;
  width: 108px;
  display: grid;
  align-content: center;
  justify-content: center;
  gap: 5px;
}
.flock { grid-template-columns: repeat(4, 23px); gap: 3px; }
.flock svg { width: 23px; fill: var(--vp-c-text-2); }
.flock path { fill: none; stroke: var(--vp-c-text-2); stroke-width: 2; stroke-linecap: round; }
.pebbles { grid-template-columns: repeat(4, 13px); gap: 8px; }
.pebbles span {
  width: 13px; height: 11px;
  border-radius: 48% 55% 42% 47%;
  background: var(--vp-c-text-2);
}
.notation { display: flex; align-items: center; gap: 12px; color: var(--vp-c-text-1); }
.notation > span:first-child { font-size: 16px; color: var(--vp-c-text-2); }
.notation-count { font-size: 28px; font-variant-numeric: tabular-nums; }
.stage-label { font-size: 14px; font-weight: 500; line-height: 24px; }
.stage-note { font-size: 12px; line-height: 22px; color: var(--vp-c-text-2); }
figcaption { margin-top: 20px; font-size: 12px; line-height: 22px; color: var(--vp-c-text-2); text-align: center; }
@media(max-width:480px) {
  .representation-stages { gap: 6px; }
  .representation-mark { width: 84px; height: 84px; }
  .flock { grid-template-columns: repeat(4, 18px); gap: 2px; }
  .flock svg { width: 18px; }
  .pebbles { gap: 6px; }
  .notation-count { font-size: 25px; }
}
</style>
