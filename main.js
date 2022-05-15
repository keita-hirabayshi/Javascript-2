// 暗黙的な型変換とは？
// 数値として定義されたものが、条件によって文字列として認識されたりすること

// 動的型付けと静的型付け言語

// javascriptは動的型付け言語として定義されている。これは変数宣言時に型の宣言がなく、変数が使用される状況に応じて形が変化するといった特徴を持つ。
// メリットとして、型が自動的に適用されるのでコードの記述量が少なく、小規模の開発に向いている。

// 静的型付けは変数宣言時に型の宣言ある
// メリットとして、型が厳密に定義されているので大規模の開発ではトレースしやすかったり、メンテナンスしやすいといった特徴がある。
function printTypeAndValue(val){
    console.log(typeof val,val);
}

let a = 0;
printTypeAndValue(a);

// javascriptの場合はparseIntとしてやることで、意図的に型を操作してやる事もできる
let b = parseInt('2') + a ;
// +は文字列・数値の計算どちらにも使用でき、上記の場合は２の文字列に型がそろえられる形となった。
printTypeAndValue(b);

let c = 15 - b;
// -は数値にしか使用されないため、上記の場合はbを数値として認識し処理が行われている
printTypeAndValue(c);

let d = c - null;
// nullは空を意味するが、ここではcの数値により０に型変換されている。
printTypeAndValue(d);

let e = d - true;
// bool型のtrue場合は数値の１として型変換される
printTypeAndValue(e);

