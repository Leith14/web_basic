<template>
  <div>
    <div v-for="item in arr">{{ item }}</div>
  </div>
</template>

<script setup lang="ts">
const arr:string[] = ['A','B','C','D']
arr.splice(2,0,'DDD')
</script>

<style></style>
