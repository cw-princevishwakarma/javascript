function login(username,pass){
    return new Promise((resolve,reject)=>{
        if(username==="admin" && pass==1234){
            resolve("login successful")
        }
        else{
            reject("Your are not authorised")
        }
    })
}

login("admin",1234).then(console.log).catch(console.error).finally(()=>{
    console.log("Done with execution")
})