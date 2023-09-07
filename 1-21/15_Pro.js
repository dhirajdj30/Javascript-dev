const prompt = require('prompt-sync')({sigint:true});


// Arrays 

let a = [1,3,5,78,74,1,5]

for(let i in a){

    console.log(a[i])
}
console.log("---------------End OF Program-------------------")
// We can add new value

let arr = [98, 95, 92, 99, 97, 94]
arr[6]= 85

for(let i in arr){
    console.log(arr[i])
}

// update existing data 
console.log("----------After Changing the value------------------")
arr[4]=56

for(let i in arr){
    console.log(arr[i])
}

console.log(typeof(arr))