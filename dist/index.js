"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  encodeNumber: () => encodeNumber,
  encodeUtf8String: () => encodeUtf8String,
  hashDataKey: () => hashDataKey,
  stringToUint8ArrayUtf8: () => stringToUint8ArrayUtf8
});
module.exports = __toCommonJS(src_exports);
var import_libskynet = require("libskynet");
var import_buffer = require("buffer");
function hashDataKey(dataKey) {
  return (0, import_libskynet.blake2b)(encodeUtf8String(dataKey));
}
function encodeUtf8String(str) {
  const byteArray = stringToUint8ArrayUtf8(str);
  const encoded = new Uint8Array(8 + byteArray.length);
  encoded.set(encodeNumber(byteArray.length));
  encoded.set(byteArray, 8);
  return encoded;
}
function stringToUint8ArrayUtf8(str) {
  return Uint8Array.from(import_buffer.Buffer.from(str, "utf-8"));
}
function encodeNumber(num) {
  const encoded = new Uint8Array(8);
  for (let index = 0; index < encoded.length; index++) {
    encoded[index] = num & 255;
    num = num >> 8;
  }
  return encoded;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  encodeNumber,
  encodeUtf8String,
  hashDataKey,
  stringToUint8ArrayUtf8
});
//# sourceMappingURL=index.js.map