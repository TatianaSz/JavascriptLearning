const fib = function(n, save={}){
    if(n<=2)return 1;
 
    if(n in save){return save[n] };
    save[n] = fib(n-1, save) + fib(n-2, save);
    
    return save[n];
}
//console.log(fib(4));


const Sum=(t,num, memo={})=>{
    if(t===0) return [];
    if(t in memo)return memo[t]
    if(t<0) return null;

    for(let n of num){
        let s=t-n;
        const rem = Sum(s,num,memo);
        if(rem!==null){
           memo[t]=[...rem,n];
           return memo[t];
        }
    }
    memo[t] =null;
    return null
}
console.log(Sum(7000,[3,3]))
