<template>
  <quasar-layout>
      <div class="bg-dark layout layout-padding justify-between">
        <div class="row justify-around">
          <template v-for="(light, index) in lights">
            <button v-bind:key="`light${index}`" :id="`light${index}`" class="shadow-2 circular small" :class="light.color"></button>
          </template>
        </div>

        <div class="row self-center">
          <button class="bg-light-blue-4 text-light circular big playButton" id="start" @click="togglePlayStop">{{ playButtonText }}</button>
        </div>

        <div class="row justify-around">
          <div class="column inline self-end">
            <q-numeric class="text-light-blue-4 big" :min="2" v-model="beat"></q-numeric>
          </div>
          <q-knob color="#64b5f6" v-model="bpm"  :min="60" :max="230"></q-knob>
        </div>
      </div>
  </quasar-layout>
</template>

<script>
import Light from './helpers/Light'
import LightColors from './helpers/LightColors'

const MINUTE = 60000

export default {
  data () {
    return {
      lights: [new Light(), new Light()],
      audio: {},
      isRunning: false,
      intervalId: false,
      beat: 4,
      bpm: 60,
      clickCounter: 0,
      color: LightColors.ON,
      lightIndexToTurnOff: null,
      nextLightIndexToTurnOn: null
    }
  },
  created () {
    this.audio = new Audio()
  },
  computed: {
    playButtonText () {
      return this.isRunning ? 'STOP' : 'START'
    },
    intervalTempo () {
      return (MINUTE / this.bpm)
    }
  },
  methods: {
    togglePlayStop () {
      this.isRunning = !this.isRunning
      if (this.isRunning) {
        this.lights[0].turnOn(LightColors.HEAD)
        this.audio.src = 'statics/first.ogg'
        this.audio.play()

        this.intervalId = setInterval(this.click, this.intervalTempo)
      }
      else {
        this.intervalId = this.stop()
        this.clickCounter = 0

        this.lights.forEach((light) => {
          light.turnOff()
        })
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
        this.audio.src = 'statics/first.ogg'
      }
      else {
        this.color = LightColors.ON
        this.audio.src = 'statics/second.ogg'
      }

      this.lights[this.nextLightIndexToTurnOn].turnOn(this.color)
      this.audio.play()
    },
    stop () {
      clearInterval(this.intervalId)
      return true
    }
  }
}
</script>

<style lang="styl">
  .q-numeric i {
    font-size: 200% !important;
  }

  .q-numeric input[type="number"] {
    font-size: 200% !important;
    color: white;
  }

  .q-numeric {
    border-bottom: none !important;
  }

  .playButton {
    height: 90px !important;
    width: 90px !important;
  }

  .playButton i {
    font-size: 2em;
  }
</style>