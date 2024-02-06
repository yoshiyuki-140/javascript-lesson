# JavaScriptにおける等価演算子について


## 結論
- 等価演算子は`===`を使え、`==`はできるだけ避けろ.

## 例

- 以下はすべてtrue
```JavaScript
console.log('3.14E2' == 314);
console.log('0x10' == 16);
console.log('1' == 1);
```

- 以下はすべてfalse
```JavaScript
console.log('3.14E2' === 314);
console.log('0x10' === 16);
console.log('1' === 1);
```



