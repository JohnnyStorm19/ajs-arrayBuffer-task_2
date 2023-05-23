/* eslint-disable no-console */
import ArrayBufferConverter from './js/ArrayBufferConverter';
import getBuffer from './js/getBuffer';

const converter = new ArrayBufferConverter();
converter.load(getBuffer());
converter.toString();
console.log(converter);
console.log(converter.string === '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
