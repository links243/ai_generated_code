<template>
  <div class="sidebar h-full flex flex-col">
    <div class="top p-6 pl-4 pr-4">
      <el-button plain class="add-btn" :icon="Plus">新建页面</el-button>
    </div>
    <div class="page-list p-16 flex-1 overflow-x-hidden overflow-y-auto">
        <div v-for="num in 4" :key="num" class="page-item flex p-3 cursor-pointer text-sm items-center">
          <div class="flex-1">新建聊天</div>
          <el-popover width="180" placement="right" trigger="click">
            <template #reference>
              <el-icon :size="16" class="mr-3"><Edit /></el-icon>
            </template>
            <template #default>
              <el-input v-model="renameVal" size="small"></el-input>
              <div class="text-right mt-2">
                <el-button size="small" text>取消</el-button>
                <el-button size="small" type="primary">确定</el-button>
              </div>
            </template>
          </el-popover>
          <el-popconfirm width="180" title="确定删除此记录？" placement="right" confirm-button-text="确定" cancel-button-text="取消">
            <template #reference>
              <el-icon :size="16" style="color: #F56C6C"><Delete /></el-icon>
            </template>
          </el-popconfirm>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// <el-icon><DArrowLeft /></el-icon>
// <el-icon><DArrowRight /></el-icon>
import { ref, reactive } from 'vue'
import { Plus, Edit, Delete, DArrowLeft, DArrowRight  } from '@element-plus/icons-vue'

const renameVal = ref('')
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  width: 260px;
  border-right: 1px solid var(--border-color);
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    // padding: 16px;
    width: 100%;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid var(--border-color);
    .add-btn {
      width: 100%;
      height: 40px;
    }
  }
  .page-list {
    padding: 0px .75rem;
    .page-item {
      user-select: none;
      color: var(--el-text-color-primary);
      border-radius: .5rem;
      &:hover {
        background: rgba(var(--el-color-primary-rgb), .1);
      }
    }
  }
}
</style>