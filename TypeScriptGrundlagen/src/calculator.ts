const a: number = 10;
const b: number = 0;
const opertion: string = "divide";

if (opertion === "add") {
  console.log(a + b);
}
else if (opertion === "subtract") {
  console.log(a - b);
}
else if (opertion === "multiply") {
  console.log(a * b);
}
else if (opertion === "divide") {
  if (b !== 0) {
    console.log(a / b);
  }
  else {
    console.log("Division durch Null ist nicht erlaubt");
  }
}
else {
  console.log("ungültige Operation");
}