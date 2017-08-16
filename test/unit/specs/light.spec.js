import Light from '../../../src/components/helpers/Light'
import LightColors from '../../../src/components/helpers/LightColors'

describe('Light class', () => {
  it('should turn the light on', () => {
    let light = new Light()
    light.turnOn()

    expect(light.isOn()).to.be.true
  })

  it('should turn the light off', () => {
    let light = new Light()
    light.turnOn()
    light.turnOff()

    expect(light.isOn()).to.be.false
  })

  it('should return true when the light is ON as LightColors.HEAD', () => {
    let light = new Light()
    light.turnOn(LightColors.HEAD)

    expect(light.isOn()).to.be.true
  })
})
