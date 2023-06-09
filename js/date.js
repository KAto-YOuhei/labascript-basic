const sayGoodMorning = () => {
  console.log("おはようございます！");
  console.log("昨日はよく眠れましたか？");
  console.log("今日も一日頑張りましょう！");
};

const sayGoodEvening = () => {
  console.log("こんばんは！");
  console.log("今日もお疲れさまでした。");
};

sayGoodMorning();

sayGoodEvening();

const calculateTotal = (price) => {
  console.log(price + 500 + "円");
};

calculateTotal(1200);

const addTwoArgument = (price, shippingFee) => {
  console.log(price + shippingFee + "円");
};

addTwoArgument(1200, 500);

const double = (num) => {
  return num * 2;
};

console.log(double(30));

//定数宣言をする
const userName = "侍太郎";

//定数の値を出力する
console.log(userName);
//関数の中で定数を使う
const useVariable = () => {
  console.log(userName);
};

//関数を呼び出す
useVariable();
