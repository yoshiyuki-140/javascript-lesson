// String object

let str1 = 'WINGSメンバー';
console.log(str1.length);


let str2 = '叱る';
console.log(str2.length);

let str3 = '𠮟る'; // '𠮟'はサロゲートペアなのでlengthは3になっちゃう
console.log(str3.length);

// JSでのサロゲートペアの扱いは配列に変換してからその長さを求めることで、長さを求めることになっている。
// 標準の実装でそうすればいいのになと思ったけど、まあいいか
console.log([...str3].length); // ...演算子は文字配列に分解する演算子
