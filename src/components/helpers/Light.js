import LightColors from './LightColors'

class Light {
  constructor (color = LightColors.OFF) {
    this.color = color
  }

  turnOn (color = LightColors.ON) {
    this.color = color
  }

  turnOff () {
    this.color = LightColors.OFF
  }

  isOn () {
    if (this.color === LightColors.ON || this.color === LightColors.HEAD) {
      return true
    }
    return false
  }
}

export default Light
