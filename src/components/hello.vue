<template>
  <h1>Hello {{ name }}!</h1>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="less" scoped>
h1 { color: red }
</style>