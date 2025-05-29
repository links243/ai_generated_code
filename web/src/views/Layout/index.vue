<template>
  <div class="layout h-screen flex flex-col">
    <header-component></header-component>
    <div class="h-full flex-1 overflow-x-hidden">
      <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import HeaderComponent from './HeaderComponent/index.vue'
import Sidebar from './Sidebar/index.vue'

</script>

<style lang='scss' scoped>
</style>