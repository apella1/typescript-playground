/** typed arrays are array-like objects that are used for reading
 and writing raw binary data into memory buffers
*/

const buffer = new ArrayBuffer(16);

if (buffer.byteLength === 16) {
  console.log("16 bytes long");
} else {
  console.log("Not 16 bytes. Has some byte length");
}

// creating a view
const int32View = new Int32Array(buffer);

for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}

// multiple views for the same data

const int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log(`Entry ${i}: ${int16View[i]}`);
}
