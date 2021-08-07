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
// console.log(isSum(7,[1,7]))
// console.log(isSum(700,[1,7]))
// console.log(isSum(71,[2,7]))
// console.log(isSum(9,[2,7]))
const isSum2=(t,nums)=>{

    if(t<0){return false}
    if(t===0){return true}
    for(let num of nums){
    const tsum = t-num;
    return isSum2(tsum,nums);
    
    }
    return false;
    }
// console.log(isSum2(7,[1,7]))
// console.log(isSum2(300,[14,7]))
// console.log(isSum2(71,[2,7]))
// console.log(isSum2(9,[2,7]))

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

const Sum2=(t,num, memo={})=>{ //1. add memo object as parametert
    if(t===0) return [];
    if(t in memo)return memo[t] // 2. add return memo[key] logic
    if(t<0) return null;

    let long = null;
    for(let n of num){
        let s=t-n;
        const rem = Sum2(s,num,memo); //3. dont forgert to pass memo object to recursion
        if(rem!==null){
           memo[t]=[...rem,n];
           let shorter = [...rem,n];

           if(long===null){
               long=shorter
             
               
           }
           else if(long!==null && shorter.length>long.length){
            long=shorter
            return long;
            
           }
        }
    }
    memo[t] =long; // assign memo[key] to smth and then return it
    return  memo[t]
}
console.log(Sum2(100,[10,3,5]))