const personalData = { name: "侍太郎", age: 36, gender: "男性" };

console.log(personalData["gender"]);
console.log(personalData.gender);

// 'age'というキーの値を更新する
personalData.age = 37;

// 新しくプロパティ（キーと値）を追加する
personalData.address = "東京都";
console.log(personalData.age);
console.log(personalData.address);

// オブジェクトの値を出力する
console.log(personalData);

personalData = 3;
