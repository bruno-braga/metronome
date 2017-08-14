import LightColors from '../../../src/components/helpers/LightColors'

describe('Object with colors of light', () => {
  it('should have ON OFF and HEAD keys', () => {
    expect(LightColors).to.have.all.keys([
      'ON',
      'OFF',
      'HEAD'
    ])
  })
})
