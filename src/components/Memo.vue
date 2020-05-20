<template>
  <div>
    <h2>备忘录</h2>
    <el-input
      clearable
      v-model="input" 
      placeholder="请输入内容"
      @keyup.enter.native="addMemo"
      ref="xxx"
    />
    <ul class="memo-list">
      <li
        v-for="(memo, index) in memoList"
        :key="memo.ts"
        class="memo-item"
      >
        <el-checkbox
          v-model="memo.isDone"
          @change="saveMemo"
        />
        <el-input
          ref="editInput"
          v-if="memo.isEditable"
          v-model="memo.content" 
          @blur="toggleMemoEditable(index)"
          @keyup.enter.native="toggleMemoEditable(index)"
          placeholder="请输入内容"
          size="small"
          clearable
        />
        <span
          v-else
          class="memo-content"
          :class="{'is-done': memo.isDone}"
        >
          {{ memo.content }}
        </span>
        <div class="operations">
          <i class="el-icon-edit-outline" @click="toggleMemoEditable(index)"/>
          <i class="el-icon-delete" @click="deleteMemo(index)"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import Storage from '../storage/memo'

export default {
  name: 'memo',
  data() {
    return {
      input: '',
      memoList: Storage.getMemo() || [],
    }
  },
  methods: {
    saveMemo() {
      this.$nextTick(() => Storage.saveMemo(this.memoList))
    },
    addMemo() {
      this.memoList.unshift({
        isDone: false,
        isEditable: false,
        content: this.input,
        ts: Date.now(),
      })
      this.input = ''
      this.saveMemo()
    },
    deleteMemo(index) {
      this.memoList.splice(index, 1)
      this.saveMemo()
    },
    toggleMemoEditable(index) {
      console.log('---', index)
      this.memoList[index].isEditable = !this.memoList[index].isEditable
      this.$nextTick(() => {
        console.log('nexttick', this.memoList[index].isEditable)
        if (this.memoList[index].isEditable) {
          this.$refs['editInput'][0].focus()
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.memo-list {
  text-align: left;

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
}

ul, li {
  margin:0;
  padding: 0;
  text-indent: 0;
  list-style-type: 0;
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