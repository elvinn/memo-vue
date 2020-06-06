<template>
  <header>
    <h1>备忘录</h1>
    <div class="operation">
      <el-dropdown>
        <span class="dropdown-link">
          操作菜单
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="clearDoneMemo">清除已选</el-dropdown-item>
          <el-dropdown-item @click.native="clearAllMemo">清除全部</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Header',
  methods: {
    ...mapActions([
      'clearDoneMemo',
      'clearAllMemo',
    ]),
  }
}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .right {
    align-self: flex-end;
  }

  .dropdown-link {
    cursor: pointer;
  }
</style>