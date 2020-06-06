<template>
  <div>
    <el-input
      autofocus
      clearable
      placeholder="记点什么吧？"
      v-model="input"
      @keyup.enter.native="addMemo"
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
    }
  },
  computed: {
    memoList() {
      return this.$store.state.memos
    },
  },
  methods: {
    addMemo() {
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
