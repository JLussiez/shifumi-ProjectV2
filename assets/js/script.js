let button = document.getElementById("test")

button.addEventListener('click', function(){ if (confirm("Are you sure you want to exit?")){window.close()}})

count = 3
let larue = setInterval(() => {
    console.log(count)
    count -= 1
    if(count == -1)
    console.log("ahahahah chatsibulidana mugiwarz")
    if(count == -1)
    clearInterval(larue)
}, 1000);

// let testuwu = setInterval(function(){
//     alert("neige")
// }, 1000)