<template>
  <div class="sidebar">
    <div class="top">
      <el-button plain class="add-btn" :icon="Add">新建页面</el-button>
    </div>
    <div class="page-list">
      <el-scrollbar max-height="400px">

      <el-scrollbar/>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Add } from '@element-plus/icons-vue'

</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  width: 260px;
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    width: 100%;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--border-color);
    .add-btn {
      width: 100%;
      height: 40px;
    }
  }
  .page-list {
    padding: 0px 16px;
  }
}
</style>