const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("step 1 done")
    },1000)
})


p1.then((msg)=>{
    console.log(msg)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("step 2 done")
        },1000)
    })
}).then((msg)=>{
    console.log(msg)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("step 3 done")
        },1000)
    })
}).then((msg)=>{
    console.log(msg)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("step 4 done")
        },1000)
    })
})