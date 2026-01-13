function isEven(num){
    const p1 = new Promise((resolve, reject)=>{
        if(num%2==0){
            resolve("The number is even");
        }
        else{
            reject("The number is odd")
        }
    })
    return p1
}


isEven(7).then(console.log).catch(console.error)

