<template>
  <div class="sidebar h-full flex flex-col">
    <div class="top p-6 pl-4 pr-4">
      <el-button plain class="add-btn" :icon="Plus">新建页面</el-button>
    </div>
    <div class="page-list p-16">
      <el-scrollbar max-height="400px">
        <div v-for="num in 4" :key="num" class="page-item flex p-3 pt-2 pb-2 cursor-pointer text-sm">
          <div class="flex-1">新建聊天</div>
          <div class="flex ">
            <el-icon class="mr-2"><Edit /></el-icon>
            <el-icon><Delete /></el-icon>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Plus, Edit, Delete } from '@element-plus/icons-vue'

</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  width: 260px;
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    // padding: 16px;
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
    .page-item {
      color: var(--el-text-color-primary);
      :hover {
        background: #f2f3f5;
      }
    }
  }
}
</style>