import assert from 'node:assert/strict'
import { createCpu, stepCpu, createTape, stepTape, offloadCost } from '../docs/.vitepress/theme/components/computation-models.mjs'

// The two lessons must preserve their inputs and store the expected result.
for (const [operation, result] of [['ADD', 5], ['SUB', -1]]) {
  let state = createCpu(operation)
  const original = structuredClone(state)
  for (let step = 1; step <= 15; step++) {
    state = stepCpu(state)
    if (step < 4) assert.equal(state.acc, 0, 'LOAD has not saved yet')
    if (step === 4) assert.equal(state.acc, 2, 'LOAD reads the value, not its address')
    if (step === 7) {
      assert.equal(state.acc, 2, 'Arithmetic is pending before saving')
      assert.equal(state.pending, result)
    }
    if (step === 8) assert.equal(state.acc, result)
    if (step < 12) assert.equal(state.memory[6], 0, 'STORE has not saved yet')
    if (step === 12) assert.equal(state.memory[6], result)
    if (step < 15) assert.equal(state.halted, false)
  }
  assert.equal(state.halted, true)
  assert.equal(state.pc, 3)
  assert.deepEqual(state.memory.slice(4), [2, 3, result])
  assert.deepEqual(original, createCpu(operation), 'Stepping must not change the starting state')
  assert.equal(stepCpu(state), state, 'HALT must prevent further execution')
}

// Different starting lengths all gain exactly one mark, then stop.
for (const count of [1, 3, 6]) {
  let state = createTape(count)
  for (let i = 0; i < count; i++) {
    state = stepTape(state)
    assert.equal(state.head, i + 1)
    assert.equal(state.halted, false)
    assert.equal(state.tape.filter(x => x === '1').length, count)
  }
  state = stepTape(state)
  assert.equal(state.tape.filter(x => x === '1').length, count + 1)
  assert.equal(state.halted, true)
  assert.equal(stepTape(state), state)
}

// Verify the full-path crossover, not just accelerator arithmetic time.
assert.ok(offloadCost(1).cpu < offloadCost(1).total)
assert.equal(offloadCost(8).cpu, offloadCost(8).total)
assert.ok(offloadCost(32).cpu > offloadCost(32).total)
for (let n = 1; n <= 32; n++) {
  const cost = offloadCost(n)
  assert.equal(cost.setup + cost.transfer + cost.compute, cost.total)
}
console.log('Teaching models passed: CPU results and stages, tape transitions, offload crossover.')
