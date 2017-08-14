<template>
  <quasar-layout>
    <button id="start" @click="togglePlayStop">START</button>
  </quasar-layout>
</template>

<script>
import Light from './helpers/Light'
import LightColors from './helpers/LightColors'

export default {
  data () {
    return {
      lights: [],
      isRunning: false
    }
  },
  created () {
    this.lights = [new Light(), new Light()]
  },
  methods: {
    togglePlayStop () {
      this.isRunning = !this.isRunning
      this.lights[0].turnOn(LightColors.HEAD)
      setInterval(this.click, 15)
    },
    click () {
      this.lights.forEach((light, index) => {
        if (light.isOn()) {
          return light.turnOff()
        }
        return light.turnOn()
      })
    }
  }
}
</script>

<style lang="styl">
</style>