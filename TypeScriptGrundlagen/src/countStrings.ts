const arr: string[] = ["hallo", "welt", "das", "ist", "ein", "test"];
const char: string = "a";

let count: number = 0;

for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    if (word && word.includes(char)) {
        count++;
    }
}

console.log(count);
