const p1 = new Promise((resolve, reject)=>{
    resolve(5);
})

p1.then((num)=>{
    return num+5;
}).then((num)=>{
    return num*2
}).then(console.log)