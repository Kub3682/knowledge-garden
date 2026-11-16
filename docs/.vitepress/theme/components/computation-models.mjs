// Small, deterministic teaching models shared by the illustrations and checks.
export function createTape(count = 3) {
  return {
    tape: Array.from({ length: count + 2 }, (_, i) => i < count ? '1' : '□'),
    head: 0, steps: 0, halted: false,
    note: '读头停在第一个 1。点击一步，观察它按规则移动。'
  }
}

export function stepTape(state) {
  if (state.halted) return state
  const tape = [...state.tape]
  const symbol = tape[state.head]
  if (symbol === '1') return {
    ...state, tape, head: state.head + 1, steps: state.steps + 1,
    note: '读到 1，保留原记号，向右移动一格。'
  }
  tape[state.head] = '1'
  return {
    ...state, tape, steps: state.steps + 1, halted: true,
    note: '读到空格，写入 1，然后停机。数量增加了一个。'
  }
}

export function decodeWord(word) {
  if (word === 0) return { name: 'HALT', address: null }
  const names = { 1: 'LOAD', 2: 'ADD', 3: 'SUB', 4: 'STORE' }
  return { name: names[Math.floor(word / 100)], address: word % 100 }
}

export function createCpu(operation = 'ADD') {
  return {
    memory: [104, operation === 'SUB' ? 305 : 205, 406, 0, 2, 3, 0],
    pc: 0, acc: 0, ir: null, phase: 0, pending: null,
    active: null, halted: false, steps: 0,
    note: '从地址 0 开始。下一步先把那里的指令取出来。'
  }
}

export function stepCpu(state) {
  if (state.halted) return state
  const next = { ...state, memory: [...state.memory], steps: state.steps + 1 }
  if (state.phase === 0) {
    next.ir = state.memory[state.pc]
    next.active = state.pc
    next.note = `取出地址 ${state.pc} 的 ${next.ir}，放入指令寄存器 IR。`
    next.phase = 1
  } else if (state.phase === 1) {
    const { name, address } = decodeWord(state.ir)
    next.active = null
    next.note = name === 'HALT' ? '0 表示 HALT，准备停机。'
      : `识别出 ${name}，操作对象在地址 ${address}。地址与里面的数要分清。`
    next.phase = 2
  } else if (state.phase === 2) {
    const { name, address } = decodeWord(state.ir)
    next.active = address
    if (name === 'HALT') {
      next.halted = true
      next.note = `停机。地址 6 已保存结果 ${state.memory[6]}。`
    } else {
      const value = state.memory[address]
      next.pending = name === 'LOAD' ? value
        : name === 'ADD' ? state.acc + value
          : name === 'SUB' ? state.acc - value : state.acc
      next.note = name === 'STORE' ? `准备把 ACC 中的 ${state.acc} 写到地址 ${address}。`
        : name === 'LOAD' ? `读出地址 ${address} 的 ${value}，准备放入 ACC。`
          : `${state.acc} ${name === 'ADD' ? '+' : '−'} ${value} = ${next.pending}，等待保存。`
      next.phase = 3
    }
  } else {
    const { name, address } = decodeWord(state.ir)
    if (name === 'STORE') next.memory[address] = state.pending
    else next.acc = state.pending
    next.active = name === 'STORE' ? address : null
    next.pc = state.pc + 1
    next.pending = null
    next.phase = 0
    next.note = name === 'STORE' ? `结果 ${state.pending} 已写到地址 ${address}。下一条在地址 ${next.pc}。`
      : `ACC 更新为 ${next.acc}。下一条指令在地址 ${next.pc}。`
  }
  return next
}

export function offloadCost(count) {
  return { cpu: count * 4, setup: 12, transfer: 12, compute: count, total: 24 + count }
}
