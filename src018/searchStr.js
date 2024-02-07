// 文字列探索

let str = 'にはにはにわにわとりがいる';


console.log(str.indexOf('にわ'));
console.log(str.lastIndexOf('にわ'));
console.log(str.indexOf('にど')); // 検索文字列が見つからなかった場合には-1を返す
console.log(str.indexOf('にわ', 5));
console.log(str.lastIndexOf('とり', 7));


