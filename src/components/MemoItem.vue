<template>
<li class="memo-item">
  <el-checkbox
    :checked="memo.isDone"
    @change="toggle"
  />
  <el-input
    v-if="isEditable"
    v-model="text" 
    placeholder="请输入内容"
    size="small"
    clearable
    @blur="endEdit"
    @compositionstart.native="isInComposition = true"
    @compositionend.native="isInComposition = false"
    @keydown.enter.native="endEdit"
  />
  <span
    v-else
    class="memo-content"
    :class="{'is-done': memo.isDone}"
  >
    {{ text }}
  </span>
  <div class="operations">
    <i class="el-icon-edit-outline" @click="startEdit"/>
    <i class="el-icon-delete" @click="deleteMemo({id: memo.id})"/>
  </div>
</li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MemoItem',
  props: ['memo'],
  data() {
    return {
      isInComposition: false, // 正在用中日韩等输入法进行输入
      isEditable: false,
      text: '',
    }
  },
  watch: {
    'memo.text': {
      handler() {
        this.text = this.memo.text
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions([
      'editMemo',
      'deleteMemo',
      'toggleMemo',
    ]),
    startEdit() {
      this.isEditable = true
    },
    endEdit() {
      if (this.isInComposition) {
        return
      }

      this.isEditable = false
      this.editMemo({
        id: this.memo.id,
        text: this.text,
      })
    },
    toggle() {
      this.toggleMemo({
        id: this.memo.id,
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.memo-item {
  display: flex;
  align-items: center;
  margin: 1em;

  .el-input {
    margin-left: 1em;
  }

  .memo-content {
    margin: 0 0.5em;

    &.is-done {
      color: #bbb;
    }
  }

  .operations {
    display: flex;
    opacity: 0;

    i {
      color: #909399;
      cursor: pointer;
      margin: 0.3em;
      font-size: 14px;

      &:hover {
        color: #409EFF;
      }
    }
  }

  &:hover .operations {
    opacity: 1;
  }
}
</style>

<style lang="scss">
// elemetui 样式覆盖
.memo-item .el-checkbox__input {  
  &.is-focus .el-checkbox__inner {
    border-color: #E4E7ED;
  }

  &.is-checked .el-checkbox__inner {
    border-color: #E4E7ED;
    background: #E4E7ED;
  }
}
</style>