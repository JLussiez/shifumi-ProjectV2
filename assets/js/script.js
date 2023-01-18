// let button = document.getElementById("test")
let image = document.getElementById("imgtimer")
let p2 = document.getElementById('p2')

let pierre = document.querySelector('pierre')
let ciseaux = document.querySelector('ciseaux')
let feuille = document.querySelector('feuille')
let life = document.getElementById("heartlife1")
let life1 = document.getElementById("heartlife2")

// button.addEventListener('click', function () {
//     if (confirm("Are you sure you want to exit?")) {
//         window.close()
//     }
// })

count = 3
let timer = setInterval(() => {
    count -= 1
    if (count == 2)
        image.src = "assets/img/2.svg"
    if (count == 1)
        image.src = "assets/img/1.svg"
    if (count == 0)
        image.src = "assets/img/fight.svg"
    if (count == -1)
        clearInterval(timer)
}, 1000);

let [computer_score, user_score] = [0, 0];
let result_ref = document.getElementById("result");
let choices_object = {
    'rock': {
        'rock': 'draw',
        'scissor': 'win',
        'paper': 'lose'
    },
    'scissor': {
        'rock': 'lose',
        'scissor': 'draw',
        'paper': 'win'
    },
    'paper': {
        'rock': 'win',
        'scissor': 'lose',
        'paper': 'draw'
    }

}

function checker(input) {
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random() * 3);

    document.getElementById("comp_choice").innerHTML =
        ` Computer choose <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML =
        ` You choose <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch (choices_object[input][computer_choice]) {
        case 'win':
            result_ref.style.cssText = "color: #cefdce; color: #689f38";
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;

    if (computer_score == 10){
        image.src = "assets/img/p2win.svg"
    } else if (user_score == 10){
        image.src = "assets/img/p1win.svg"
        p2.src = "assets/img/p2loose.svg"
        p2.style.width = '35vh';
        p2.style.height = '35vh';
        p2.style.paddingTop = '20%';
    }

    if(computer_score == 1){
        life.src = "assets/img/coeur_de_vie_9.png"
    } else if (computer_score == 2){
        life.src = "assets/img/coeur_de_vie_8.png"
    }else if (computer_score == 3){
        life.src = "assets/img/coeur_de_vie_7.png"
    }else if (computer_score == 4){
        life.src = "assets/img/coeur_de_vie_6.png"
    }else if (computer_score == 5){
        life.src = "assets/img/coeur_de_vie_5.png"
    }else if (computer_score == 6){
        life.src = "assets/img/coeur_de_vie_4.png"
    }else if (computer_score == 7){
        life.src = "assets/img/coeur_de_vie_3.png"
    }else if (computer_score == 8){
        life.src = "assets/img/coeur_de_vie_2.png"
    }else if (computer_score == 9){
        life.src = "assets/img/coeur_de_vie_1.png"
    }else if (computer_score == 10){
        life.src = "assets/img/coeur_de_vie_0.png"
    }

    if(user_score == 1){
        life1.src = "assets/img/coeur_de_vie_9.png"
    } else if (user_score == 2){
        life1.src = "assets/img/coeur_de_vie_8.png"
    }else if (user_score == 3){
        life1.src = "assets/img/coeur_de_vie_7.png"
    }else if (user_score == 4){
        life1.src = "assets/img/coeur_de_vie_6.png"
    }else if (user_score == 5){
        life1.src = "assets/img/coeur_de_vie_5.png"
    }else if (user_score == 6){
        life1.src = "assets/img/coeur_de_vie_4.png"
    }else if (user_score == 7){
        life1.src = "assets/img/coeur_de_vie_3.png"
    }else if (user_score == 8){
        life1.src = "assets/img/coeur_de_vie_2.png"
    }else if (user_score == 9){
        life1.src = "assets/img/coeur_de_vie_1.png"
    }else if (user_score == 10){
        life1.src = "assets/img/coeur_de_vie_0.png"
    }
}
