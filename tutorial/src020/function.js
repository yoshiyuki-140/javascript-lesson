// Functionコンストラクタ経由での定義

let getTriangleArea = new Function(
  'base', // 引数1
  'height', // 引数2
  'return base * height / 2;', // 関数本体
);

console.log(getTriangleArea(10, 4));

// Functionコンストラクタを用いた関数定義の大きな特徴は、関数本体を文字列として定義できるところ
// 以下のようにも定義できる

let param = 'height, width';
let formula = 'return height * width / 2;';
let diamond = new Function(param, formula);


console.log(diamond(5, 2));

// 関数リテラルでの定義

getTriangleArea = function (base, height) {
  return base * height / 2;
};

console.log(getTriangleArea(10, 4))


// アロー関数による定義

getTriangleArea = (base, height) => {
  return base * height / 2;
};

console.log(getTriangleArea(10, 2));
