const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Successfully");
    },5000)
})

p1.then((mess)=>{
    console.log(mess);
})