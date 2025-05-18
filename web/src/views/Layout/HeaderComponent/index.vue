<template>
  <div class="top-bar">
    <div class="left">
      <div class="sider-btn">
        <expand></expand>
      </div>
    </div>
    <div class="right">
      <el-switch
        v-model="isDark"
        :active-value="true"
        :inactive-value="false"
        :active-action-icon="Moon"
        :inactive-action-icon="Sunny"
        @change="toggleDark"
      >
      </el-switch>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Sunny, Moon } from "@element-plus/icons-vue";
import Expand from "@/icons/expand.svg";
import Operation from "@/icons/expand.svg";
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style lang="scss" scoped>
.top-bar {
  height: 52px;
  width: 100%;
  background-color: var(--bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  .sider-btn {
    cursor: pointer;
  }
  border-bottom: 1px solid var(--border-color);
}
</style>
