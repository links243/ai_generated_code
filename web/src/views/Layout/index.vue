<template>
  <div class="layout h-screen">
    <header-component></header-component>
    <div class="h-full">
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