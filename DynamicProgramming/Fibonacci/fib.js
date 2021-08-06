const fib = function(n, save={}){
    if(n<=2)return 1;
    if(n in save){return save[n] };
    save[n] = fib(n-1, save) + fib(n-2, save);
    return save[n];
}
console.log(fib(50));


