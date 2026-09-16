const arr: string[] = ["hallo", "welt", "das", "ist", "ein", "test"];
const char: string = "t";

let count: number = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(char)) {
        count++;
    }
}

console.log(count);
