import SoundPlayer from './sound-player'

export default class SoundPlayerConsumer {
  private soundPlayer: SoundPlayer

  constructor() {
    this.soundPlayer = new SoundPlayer()
  }

  playSomethingCool(): void {
    const coolSoundFileName = 'song.mp3'
    this.soundPlayer.playSoundFile(coolSoundFileName)
  }
}
