let balance = 1000;
let stavka;
let win;
let randomNumber;
let color;
let randomColor; 

while (balance>0 && balance <20000) {  
    let bet = +prompt(`Сделай ставку не более ${balance}`); 
    if (!bet){
        break
    }
    let color = prompt('На какой цвет будем ставить? красный или черный?')
    if (!color){
        break
    }
    if(color!= "красный" && color!= "черный"){
        continue
    } else {
        randomNumber = Math.floor(Math.random() * 2) + 1;
        randomColor =  randomNumber == 1 ? "красный":"черный";
            if (color == randomColor) {
                win = bet*3;
                balance += win;
                alert(`Ты победил. Баланс увеличен! Баланс: ${balance}`)
            } else {
                balance -= bet;
                bet*2;
                console.log(bet)
                alert(`Ты проиграл! Твой баланс сейчас - ${balance}`) 
            }  
        } 
    }