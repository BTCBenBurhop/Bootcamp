const height: number = 3;

for (let i = 0; i < height; i++) {
    console.log(" ".repeat(height - i) + "*".repeat(i*2 + 1));
}