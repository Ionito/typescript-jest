import SoundPlayer from '../modules/sound-player'
import SoundPlayerConsumer from '../modules/sound-player-consumer'

jest.mock('../modules/sound-player')

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  SoundPlayer.mockClear()
})

it('We can check if the consumer called the class constructor', () => {
  new SoundPlayerConsumer()
  expect(SoundPlayer).toHaveBeenCalledTimes(1)
})
