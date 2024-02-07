// throw命令

let x = 1;
let y = 0;

try {
  if (y === 0) {
    throw new Error('0で除算しようとした。');
  }
  let z = x / y;
} catch (e) {
  console.log(e.message);
}

/*
# throwで投げることのできる主なエラー
- EvalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError

# throwではError以外でも構わん
 */
try {
  throw 'へいへいへいへい！';
} catch (e) {
  console.log(e.message); // e.message is undefined
} finally {
  console.log("いったん落ち着こうか");
}