// label startment


sum_label: // ラベル
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    let result = i * j;
    // ラベルをしていて内側のループから外側のループへのbreakを呼び出している。
    if (result > 30) { break sum_label; }
    document.write(`${result}\t\t`);
  }
  document.write("<br/>");
}
