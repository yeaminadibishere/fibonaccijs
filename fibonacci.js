var fibo = [0, 1];
// fibo[2] = fibo[2-1] + fibo[2-2] 
// fibo[3] = fibo[3-1] + fibo[3-2] 
// fibo[4] = fibo[4-1] + fibo[4-2] 
// fibo[5] = fibo[5-1] + fibo[5-2] 
// fibo[i] = fibo[i-1] + fibo[i-2] 
for (var i = 2; i<=10; i++){
    fibo[i] = fibo [i-1] + fibo[i-2];
}
console.log(fibo);