<template>
  <div>
    <h4>我是Profile组件</h4>
    <ul>
      <li>{{ $route.query.name }}</li>
      <li>{{ $route.query.age }}</li>
      <li>{{ $route.query.height }}</li>
    </ul>
  </div>
</template>
<script>
</script>
<style scoped>
</style>