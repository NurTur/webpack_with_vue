<template>
  <div>
    <h3>{{ san }}</h3>
    <button @click="counter++">
      +
    </button>
    <button @click.prevent="decrement">
      -
    </button>
    <div>{{ counter }}</div>
  </div>
</template>

<script>
export default {
  props: {
    san: {
      type: Number,
      required: true
    }
  },
  data () { return { counter: 0 } },
  methods: {
    decrement () {
      if (this.counter > 0) {
        --this.counter
        return this.counter
      }
    }
  }
}
</script>
