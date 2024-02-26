let balance = +prompt('Введите сумму до 20000');
let win;
let randomNumber;
let color;
let randomColor;

while (balance > 0 && balance < 20000) {
    let bet = +prompt(`Сделай ставку не более ${balance}`);
    if (bet > balance) {
        alert('Ставка превышает баланс')
        break
    }
    if (!bet) {
        alert('Выберите корректное значение ставки')
        break
    }
    let color = prompt('На какой цвет будем ставить? Red или Black?')
    if (!color) {
        alert('Введите корректное значение')
        break
    }
    if (color != "Red" && color != "Black") {
        alert('Выберите цвет')
        break
    } else {
        isRed = Math.floor(Math.random() * 2) + 1; 
        if (isRed) {
            win = +bet * 3;
            balance += win;
            alert(`Ты победил. Баланс увеличен! Баланс: ${+balance}`)
        } else {
            balance -= bet;
            +bet * 2;
            console.log(bet)
            alert(`Ты проиграл! Твой баланс сейчас - ${+balance}`)
        }
    }
}