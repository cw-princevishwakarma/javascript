const input = document.getElementById("input-field")

const logValue = (e)=>{
    console.log(e.target.value);
}


function debounce(fn,delay){
    let timer
    return function(...args){
        console.log(args)
        clearTimeout(timer)

        timer=setTimeout(()=>{
            fn(...args);
        },delay)
    }
}

const processChange = debounce(logValue, 500);

document.addEventListener("keydown", processChange);