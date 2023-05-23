import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('Создается инстанс класса ArrayBufferConverter', () => {
  const converter = new ArrayBufferConverter();
  const res = { buffer: undefined, string: '' };
  expect(converter).toEqual(res);
});
test('Функция getBuffer возвращает объект типа ArrayBuffer с содержимым представленным как Uint16Array', () => {
  const buffer = getBuffer();
  const bufferView = new Uint16Array(buffer);
  const res = new Uint16Array([
    123, 34, 100, 97, 116, 97, 34, 58, 123, 34,
    117, 115, 101, 114, 34, 58, 123, 34, 105, 100,
    34, 58, 49, 44, 34, 110, 97, 109, 101, 34,
    58, 34, 72, 105, 116, 109, 97, 110, 34, 44,
    34, 108, 101, 118, 101, 108, 34, 58, 49, 48,
    125, 125, 125,
  ]);
  expect(bufferView).toEqual(res);
});
test('Метод load инстанса класса ArrayBufferConverter записывает в свойство this.buffer данные функции getBuffer', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  const bufferView = new Uint16Array(converter.buffer);
  const res = new Uint16Array([
    123, 34, 100, 97, 116, 97, 34, 58, 123, 34,
    117, 115, 101, 114, 34, 58, 123, 34, 105, 100,
    34, 58, 49, 44, 34, 110, 97, 109, 101, 34,
    58, 34, 72, 105, 116, 109, 97, 110, 34, 44,
    34, 108, 101, 118, 101, 108, 34, 58, 49, 48,
    125, 125, 125,
  ]);
  expect(bufferView).toEqual(res);
});
test('Метод toString инстанса класса ArrayBufferConverter записывает в свойство this.string валидную строку после конвертации данных из this.buffer', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  converter.toString();
  const res = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(converter.string).toBe(res);
});
