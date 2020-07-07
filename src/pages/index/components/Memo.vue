<template>
  <div>
    <el-input
      v-model="input"
      placeholder="记点什么吧？"
      autocomplete="off"
      clearable
      autofocus
      @compositionstart.native="isInComposition = true"
      @compositionend.native="isInComposition = false"
      @keydown.enter.native="addMemo"
    />
    <ul class="memo-list">
      <MemoItem
        v-for="(memo) in memoList"
        :key="memo.id"
        :memo="memo"
      />
    </ul>
  </div>
</template>

<script>
import MemoItem from './MemoItem'

export default {
  name: 'memo',
  components: { MemoItem },
  data() {
    return {
      input: '',
      isInComposition: false, // 正在用中日韩等输入法进行输入
    }
  },
  computed: {
    memoList() {
      return this.$store.state.memos
    },
  },
  methods: {
    addMemo() {
      if (this.isInComposition) {
        return;
      }

      const input = this.input.trim()

      if (input) {
        this.$store.dispatch('addMemo', input)
      }

      this.input = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.memo-list {
  text-align: left;
}
</style>
