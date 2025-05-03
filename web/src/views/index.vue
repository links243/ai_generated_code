<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="increment">点击增加: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// 响应式数据
const message = ref('欢迎使用 Vue 3 组合式 API')
const count = ref(0)

// 计算属性
const doubleCount = computed(() => count.value * 2)

// 方法
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log('组件已挂载')
})
</script>

<style scoped>
/* 组件样式 */
h1 {
  color: #42b983;
}
</style>