// 文字列が渡されると500ms後に
// "入力値:xxx" という成功メッセージを送り、valueが未定義の際はエラーとなり、
// "エラー：入力は空"という文字列を返す

function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        // 引数valueが未定義であるかどうかによって成否を判定
        resolve(`入力値:${value}`);
      } else {
        // 引数valueが未定義の場合に発生する
        reject('入力は空です。');
      }
    });
  });
}

asyncProcess('トクジロウ')
  // 成功した時に実行される処理
  .then(response => {
    console.log(response);
  })
  // エラーが起きた時の処理
  .catch(error => {
    console.log(error);
  })
  // 必ず実行する処理
  .finally(() => console.log('処理終了'));

