<template>
  <div class="flex h-full">
    <div class="px-4 m-auto space-y-4 text-center max-[400px]">
      <h1 class="text-4xl text-slate-800 dark:text-neutral-200">
        Sorry, page not found!
      </h1>
      <p class="text-base text-slate-500 dark:text-neutral-400">
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.
      </p>
      <el-button type="primary" @click="goHome">返回</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function goHome() {
  router.push('/')
}
</script>
