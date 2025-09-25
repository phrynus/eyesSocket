<script setup lang="ts">
import { Quit } from '@/wailsjs/runtime/runtime'
</script>

<template>
  <div>
    <h1>You did it!1</h1>
    <p>
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>
    关闭
    <button @click="Quit()">
      <span>关闭</span>
    </button>
  </div>
</template>

<style scoped></style>
