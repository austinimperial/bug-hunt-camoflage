export default function uInt8ClampedArrayToPixels(uInt, pixelCount) {
  let pixels = [];
  for (let i = 0; i < pixelCount; i += 4) {
    pixels.push([uInt[i], uInt[i + 1], uInt[i + 2]]);
  }
  return pixels;
}
