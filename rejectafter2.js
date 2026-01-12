const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Something went wrong")
    },1000)
})

p1.then((obj)=>{
    console.log(obj);
}).catch((err)=>{
    console.log(err)
})