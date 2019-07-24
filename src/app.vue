<template>
  <div class="full-width center-content">
    <Hello name="name" />
    <ObjectVue />
    <BindData />
    <EventHandler :san="4" />
  </div>
</template>

<script>
import Hello from './components/hello.vue'
import ObjectVue from './components/objectVue.vue'
import BindData from './components/bindData.vue'
import EventHandler from './components/eventHandler.vue'

export default {
  components: {
    Hello, ObjectVue, BindData, EventHandler
  }
}
</script>