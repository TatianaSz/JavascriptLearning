//is there a sum of array nums that is equal to t?

const isSum=(t,nums, memo={})=>{
if(t in memo){return memo[t]}
if(t<0){return false}
if(t===0){return true}
for(let num of nums){
const tsum = t-num;
memo[t]= isSum(tsum,nums,memo);
return memo[t];
}
return false;
}
console.log(isSum(7,[1,7]))
console.log(isSum(700,[1,7]))
console.log(isSum(71,[2,7]))
console.log(isSum(9,[2,7]))



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
//console.log(Sum(7000,[3,3]))
