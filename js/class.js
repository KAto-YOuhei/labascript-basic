//クラスを定義する
class Product {
  //インスタンス化すると同時に処理を実行（初期化）する
  constructor() {
    //インスタンス（オブジェクト）にプロパティを持たせる
    this.name = "シャンプー";
    this.price = 500;
    this.category = "生活雑貨";
  }
}
//インスタンス化する
const shampoo = new Product();

//インスタンス（オブジェクト）の値を出力するcons
console.log(shampoo);

//引数ありVer
//クラスを定義する
class Product {
  constructor(name, price, category) {
    //インスタンス（オブジェクト）にプロパティを持たせる
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

//インスタンス化する
const shampoo = new Product("シャンプー", 500, "生活雑貨");
const coffee = new Product("コーヒー", 1500, "飲料");

//インスタンス（オブジェクト）の値を出力する
console.log(shampoo);
console.log(coffee);
