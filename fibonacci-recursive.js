  // fibo[i] = fibo[i-1] + fibo[i-2] 
  function fibonacci(n){
      if (n==0){
          return 0;
      }
      if (n==1){
          return 1;
      } else {
          return fibonacci(n-1) + fibonacci(n-2);
      }
  }
  var res = fibonacci(10);
  console.log(res);