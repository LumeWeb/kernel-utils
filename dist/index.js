// src/index.ts
import { blake2b } from "libskynet";
import { Buffer } from "buffer";
function hashDataKey(dataKey) {
  return blake2b(encodeUtf8String(dataKey));
}
function encodeUtf8String(str) {
  const byteArray = stringToUint8ArrayUtf8(str);
  const encoded = new Uint8Array(8 + byteArray.length);
  encoded.set(encodeNumber(byteArray.length));
  encoded.set(byteArray, 8);
  return encoded;
}
function stringToUint8ArrayUtf8(str) {
  return Uint8Array.from(Buffer.from(str, "utf-8"));
}
function encodeNumber(num) {
  const encoded = new Uint8Array(8);
  for (let index = 0; index < encoded.length; index++) {
    encoded[index] = num & 255;
    num = num >> 8;
  }
  return encoded;
}
export {
  encodeNumber,
  encodeUtf8String,
  hashDataKey,
  stringToUint8ArrayUtf8
};
//# sourceMappingURL=index.js.map