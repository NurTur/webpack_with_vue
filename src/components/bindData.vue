<template>
  <div>
    <a
      :href="link"
      :style="{ color:textcolor }"
    >Hasan
    </a>
    <input
      type="text"
      @input="setMessage"
    >
    <p
      v-once
    >
      {{ message }}
    </p>
    <p>{{ message }}</p>
    <div
      v-html="htmlCode"
    />
    <div>{{ htmlCode }}</div>
  </div>
</template>

<script>
export default {
  data () { return { textcolor: 'red', link: 'https://google.com', message: 'nur', htmlCode: '<h2>Hello</h2>' } },
  methods: {
    setMessage: function (event) {
      this.message = event.target.value
    }
  }
}
</script>
