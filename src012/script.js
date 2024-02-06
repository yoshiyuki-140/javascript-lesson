// 例外処理

let i = 1;

try {
  i = i * j; // reference error, undefined the variable 'j'.
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
} finally {
  console.log('例外は完了しました');
}
