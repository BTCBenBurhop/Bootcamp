function berechneReihe(n :number): number [] {
    let arr1: number [] = [1];
    for (let i = 0; i < n; i++){
        let arr2: number [] = [0, ...arr1];
        arr1 = arr2.map((value, index) => value + (arr1[index] ?? 0));
    }
    return arr1;
}

