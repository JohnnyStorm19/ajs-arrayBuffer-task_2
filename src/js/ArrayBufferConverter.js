export default class ArrayBufferConverter {
  constructor() {
    this.buffer = undefined;
    this.string = '';
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    bufferView.forEach((item) => {
      this.string += String.fromCharCode(item);
    });
  }
}
