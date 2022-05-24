let counter = document.querySelector(".counter")

let counterNumber =0;
let counterStopNumber= Number(counter.innerHTML)
let counterUp = ()=>{
    counterNumber++
    counter.innerHTML=counterNumber
    if(counterNumber==counterStopNumber){
     clearInterval(stop)
    }
}
let stop = setInterval(()=>{
    counterUp()
},100)



let body = document.querySelector("body")
let imgBox = document.querySelector(".imgBox")

body.addEventListener("click",function(e){
    console.log(e.target.classList[1])
    console.log(e.target.dataset.url)

    if(e.target.classList[1]=="venuBox"){
        imgBox.classList.add("imgBox2")
        imgBox.innerHTML=` <img src="${e.target.dataset.url}" alt="unsplash1">
        <button class="close-btn">X</button>`     
    }else{
        imgBox.classList.remove("imgBox2")
        imgBox.innerHTML=""
    }
})





let type = document.querySelector(".type-text")
console.log(type.dataset.text.charAt(0))

let counterJs=0;
let counterStopsNumber = type.dataset.text.length

let typeJs = (()=>{
    type.innerHTML+=type.dataset.text.charAt(counterJs)
    counterJs++

    if(counterJs>counterStopsNumber){
        counterJs = 0;
        type.innerHTML=" "
    }
})

let stops = setInterval(()=>{
    typeJs()
},300)
