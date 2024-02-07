// ドット演算子.

let str = null;
if (str !== null && str !== undefined) {
  console.log(str.length);
}


// インスタンスがnullやらundefinedの際の処理を簡略化できる便利屋?.

str = null;
console.log(str?.length);

