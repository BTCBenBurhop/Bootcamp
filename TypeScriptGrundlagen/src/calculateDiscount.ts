const price: number = 3000;
const isMember: boolean = true;

if (isMember && price > 100) {
  console.log(price*0.8);
}
else if (!isMember && price > 100) {
  console.log(price*0.9);
}
else {
  console.log(price);
}