function recusiveCounter(n: number): number {
    //Abbruchbedingung
    if (n < 0) {
        return 0;
    }
    console.log(n)
    return recusiveCounter(n-1)
}

recusiveCounter(100)