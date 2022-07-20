import {blake2b} from "libskynet"
import {Buffer} from "buffer";

export function hashDataKey(dataKey: string): Uint8Array {
    return blake2b(encodeUtf8String(dataKey));
}

export function encodeUtf8String(str: string): Uint8Array {
    const byteArray = stringToUint8ArrayUtf8(str);
    const encoded = new Uint8Array(8 + byteArray.length);
    encoded.set(encodeNumber(byteArray.length));
    encoded.set(byteArray, 8);
    return encoded;
}

export function stringToUint8ArrayUtf8(str: string): Uint8Array {
    return Uint8Array.from(Buffer.from(str, "utf-8"));
}

export function encodeNumber(num: number): Uint8Array {
    const encoded = new Uint8Array(8);
    for (let index = 0; index < encoded.length; index++) {
        encoded[index] = num & 0xff;
        num = num >> 8;
    }
    return encoded;
}
