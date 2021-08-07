// have an array of words, can a targetWord be created from those smaller words inside an array?

//1. if you find substring, delete it from target
//2.if your target is equal to empty string then you are gucci
//3.check first if your substring even is in the word

const word =(t,arr,memo={})=>{
    if (t in memo)return memo[t];
if(t.length==0){return true}

for(let a of arr){
    if(t.includes(a)){
 let newT = t.replace(a,"")
 

    if(word(newT,arr,memo)===true){
        memo[t] = true
        return true
    }
}
}
memo[t] = false
return false
}
console.log(word("dynamic",["dyn","a","c" ]))//false
