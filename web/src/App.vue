<template>
  <el-config-provider :message="msgConfig">
    <RouterView />
  </el-config-provider>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive } from 'vue'
const msgConfig = reactive({
  message: {
    max: 5
  },
})
</script>
<style scoped lang="scss">
</style>
