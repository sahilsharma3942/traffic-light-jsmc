function green(){
    document.querySelector(".green").classList.add("active");
    setTimeout(()=>{
    document.querySelector(".green").classList.remove("active");
    orange();
    },4000)
}

function orange(){
    document.querySelector(".orange").classList.add("active");
    setTimeout(()=>{
        document.querySelector(".orange").classList.remove("active");
        red();
        },2000)
}

function red(){
    document.querySelector(".red").classList.add("active");
    setTimeout(()=>{
        document.querySelector(".red").classList.remove("active");
        green();
        },4000)
}

green()