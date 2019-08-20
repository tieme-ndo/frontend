const requestHandlers = require('./requestHandlers')

// Placeholder
describe('returnTrue', () => {
  it('returns true', () => {
    const wrapper = requestHandlers.returnTrue()
    expect(wrapper).toBeTruthy()
    expect(wrapper).toBe(true)
  });
})
