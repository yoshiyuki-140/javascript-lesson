// bad practice

let data = [
  'apple', 'orange', 'banana'
]

for (let key in data) {
  console.log(data[key]);
}


// 結論

// 配列に対してはfor...of命令を使用しろ
for (let key of data) {
  console.log(key);
}
