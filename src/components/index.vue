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
      isRunning: false,
      intervalId: false,
      beat: 4,
      clickCounter: 0,
      color: LightColors.ON
    }
  },
  created () {
    this.lights = [new Light(), new Light()]
  },
  methods: {
    togglePlayStop () {
      this.isRunning = !this.isRunning
      if (this.isRunning) {
        this.lights[0].turnOn(LightColors.HEAD)
        this.intervalId = setInterval(this.click, 15)
      }
      else {
        this.intervalId = this.stop()
      }
    },
    click () {
      if (this.clickCounter === this.beat) {
        this.color = LightColors.HEAD
      }

      this.lights.forEach((light, index) => {
        if (light.isOn()) {
          return light.turnOff()
        }
        return light.turnOn(this.color)
      })

      ++this.clickCounter
    },
    stop () {
      clearInterval(this.intervalId)
      return true
    }
  }
}
</script>

<style lang="styl">
</style>