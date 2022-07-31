export default class SoundPlayer {
  private foo: string

  constructor() {
    this.foo = 'bar'
  }

  playSoundFile(fileName: string): void {
    console.log('Playing sound file ' + fileName)
  }
}
