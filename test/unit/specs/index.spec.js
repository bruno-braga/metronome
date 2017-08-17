import sinon from 'sinon'
import lolex from 'lolex'
import { mount } from 'avoriaz'

import Index from 'src/components/index'
import LightColors from '../../../src/components/helpers/LightColors'

describe('Metronome', () => {
  const metronomeWrapper = mount(Index)
  let togglePlayStopFunctionRef = metronomeWrapper.vm.togglePlayStop

  metronomeWrapper.vm.audio = {
    play () {}
  }

  beforeEach(() => {
    metronomeWrapper.vm.togglePlayStop = togglePlayStopFunctionRef
    metronomeWrapper.vm.lights.forEach((light) => {
      light.turnOff()
    })
    metronomeWrapper.setData({isRunning: false})
    metronomeWrapper.setData({beat: 4})
  })

  it('should start the metronome when the button #start is clicked', () => {
    metronomeWrapper.vm.togglePlayStop = sinon.spy()
    metronomeWrapper.update()
    metronomeWrapper.find('#start')[0].trigger('click')
    expect(metronomeWrapper.vm.togglePlayStop.called).to.be.true
  })

  it('should have a variable isRunning setted to true when the button #start is clicked', () => {
    metronomeWrapper.vm.togglePlayStop()
    expect(metronomeWrapper.data().isRunning).to.be.true
  })

  it('should have a varible isRunning setted to false when the button #started is clicked twice(like a toggle)', () => {
    metronomeWrapper.vm.togglePlayStop()
    metronomeWrapper.vm.togglePlayStop()
    expect(metronomeWrapper.data().isRunning).to.be.false
  })

  it('should change the color of the first light to red in the first click', () => {
    metronomeWrapper.vm.togglePlayStop()
    expect(metronomeWrapper.vm.lights[0].color).to.be.eql(LightColors.HEAD)
  })

  it('should toggle the color of the light after each click when beat = 4', () => {
    let clock = lolex.createClock()
    metronomeWrapper.vm.togglePlayStop() // one

    clock.setInterval(metronomeWrapper.vm.click, 15)
    clock.tick(15) // two
    clock.tick(15) // three
    clock.tick(15) // four
    clock.tick(15) // one

    expect(metronomeWrapper.vm.lights[0].color).to.be.eql(LightColors.HEAD)
    expect(metronomeWrapper.vm.lights[1].color).to.be.eql(LightColors.OFF)

    metronomeWrapper.vm.togglePlayStop()
  })

  it('should toggle the color of the light after each click beat = 3', () => {
    let clock = lolex.createClock()
    metronomeWrapper.vm.beat = 3
    metronomeWrapper.vm.togglePlayStop() // one

    clock.setInterval(metronomeWrapper.vm.click, 15)
    clock.tick(15) // two
    clock.tick(15) // three
    clock.tick(15) // one (the second light should be LightColors.HEAD now)

    expect(metronomeWrapper.vm.lights[0].color).to.be.eql(LightColors.OFF)
    expect(metronomeWrapper.vm.lights[1].color).to.be.eql(LightColors.HEAD)
  })

  it('should stop the metronome when the #start button is toggled', () => {
    metronomeWrapper.vm.togglePlayStop()
    metronomeWrapper.vm.togglePlayStop()

    let hasStopped = metronomeWrapper.vm.stop()
    expect(hasStopped).to.be.true
  })

  it('should be zero the value of clickCounter when the #start button is toggled', () => {
    metronomeWrapper.vm.togglePlayStop()
    metronomeWrapper.vm.togglePlayStop()

    expect(metronomeWrapper.vm.clickCounter).to.be.eql(0)
  })
})
