// 部分文字列取得
let str = 'WINGSプロジェクト';


console.log(str.charAt(5));
console.log(str.substring(5));
console.log(str.substring(5, 8));
console.log(str.slice(5));

// sliceとstringの違い
console.log(str.substring(5, -2));
console.log(str.slice(5, -2));
