import { mount } from 'avoriaz'
import sinon from 'sinon'
import Index from 'src/components/index'

describe('Metronome', () => {
  const metronomeWrapper = mount(Index)
  let togglePlayStopFunctionRef = metronomeWrapper.vm.togglePlayStop

  beforeEach(() => {
    metronomeWrapper.vm.togglePlayStop = togglePlayStopFunctionRef
    metronomeWrapper.setData({isRunning: false})
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
})
