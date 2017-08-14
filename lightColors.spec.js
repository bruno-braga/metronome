import LIGHT_COLORS from '../../../src/components/helpers/LightColors'

describe('LightColors', () => {
  it('should have the colors that a light will lid up in each state of the click', () => {
    expect(LIGHT_COLORS).to.have.all.keys([
      'on',
      'off',
      'head'
    ])
  })
})
