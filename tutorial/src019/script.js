// 文字列の出現回数をカウント

let str = 'にわにはにわにわとりがいる';

let count = 0;

let keywd = 'にわ';

let pos = str.indexOf(keywd);

// マッチ文字列がなくなったらループを終了
while (pos != -1) {
  count++;

  pos = str.indexOf(keywd, post + keywd.length);
}
