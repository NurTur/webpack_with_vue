<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ wellcome() }}</p>
    <p>Name: {{ getName() }}</p>
    <p>Factorial of 6 is equal to {{ factorial(6) }}</p>
  </div>
</template>

<script>
console.log('Basic')
export default {
  data () { return { name: 'Tom', age: 25 } },
  mounted () { console.log('nur', this.name) },
  methods: {
    wellcome: () => { return 'Wellcome' },
    getName: () => { return name },
    factorial: n => {
      var result = 1
      for (var i = 1; i <= n; i++) { result = result * i }
      return result
    }
  }
}
</script>
