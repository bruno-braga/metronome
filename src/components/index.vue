<template>
  <quasar-layout>
    <template v-for="(light, index) in lights">
    </template>
    <button id="start" @click="togglePlayStop">START</button>
  </quasar-layout>
</template>

<script>
import Light from './helpers/Light'
import LightColors from './helpers/LightColors'

export default {
  data () {
    return {
      lights: [new Light(), new Light()],
      isRunning: false,
      intervalId: false,
      beat: 4,
      clickCounter: 0,
      color: LightColors.ON,
      lightIndexToTurnOff: null,
      nextLightIndexToTurnOn: null
    }
  },
  methods: {
    togglePlayStop () {
      this.isRunning = !this.isRunning
      if (this.isRunning) {
        this.lights[0].turnOn(LightColors.HEAD)
        this.intervalId = setInterval(this.click, 1000)
      }
      else {
        this.intervalId = this.stop()
      }
    },
    click () {
      for (let i = 0; i < this.lights.length; i++) {
        if (this.lights[i].isOn()) {
          this.lightIndexToTurnOff = i
        }
      }

      this.lights[this.lightIndexToTurnOff].turnOff()

      if ((this.lightIndexToTurnOff + 1) != this.lights.length) {
        this.nextLightIndexToTurnOn = this.lightIndexToTurnOff + 1
      }
      else {
        this.nextLightIndexToTurnOn = 0
      }

      this.clickCounter++
      if (this.clickCounter % this.beat == 0) {
        this.color = LightColors.HEAD
      }
      else {
        this.color = LightColors.ON
      }

      this.lights[this.nextLightIndexToTurnOn].turnOn(this.color)
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