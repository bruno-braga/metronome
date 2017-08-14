<template>
  <quasar-layout>
    <button id="start" @click="togglePlayStop">START</button>
  </quasar-layout>
</template>

<script>
export default {
  data () {
    return {
      isRunning: false
    }
  },
  methods: {
    togglePlayStop () {
      this.isRunning = !this.isRunning
    }
  }
}
</script>

<style lang="styl">
</style>