let button = document.getElementById("test")
let image = document.querySelector("img")
console.log(image)

// button.addEventListener('click', function(){ if (confirm("Are you sure you want to exit?")){window.close()}})

count = 3
let timer = setInterval(() => {
    console.log(count)
    count -= 1
    if(count == 2)
    image.src = "assets/img/2.svg"
    if(count == 1)
    image.src = "assets/img/1.svg"
    if(count == 0)
    image.src = "assets/img/fight.svg"
    if(count == -1)
    clearInterval(timer)
}, 1000);

// let testuwu = setInterval(function(){
//     alert("neige")
// }, 1000)