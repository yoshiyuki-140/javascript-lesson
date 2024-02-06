# エラー処理のTips

## 結論
- エラーの処理はエラー内容を表示するにとどめておけ
    ```JavaScript
    let i = 1;

    try {
        i *= j;
    } catch (e) {
        console.log(`${e.name}: ${e.message}`); // <- この程度が好ましい
    } finally {
        console.log('エラーは無視するな');
    }
    ```
- 無視(catch文の中が空になる)は絶対するな

---

- JavaScriptにおける例外はtry..catch..finally文で処理する。

