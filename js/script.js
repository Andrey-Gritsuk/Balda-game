let okBtn = document.querySelector('.ok-btn'),
    inputLetter = document.querySelector(".container input"),
    time = document.querySelector(".time"),
    letter = document.querySelectorAll('.letter'),
    leftLetter = document.querySelector('.left-letter'),
    rightLetter = document.querySelector('.right-letter'),
    word = document.querySelector('.word');

alert("Готовы начать? на один ход 10с");

let gamer1 = {
    name: prompt("Name 1", ""),
    index: true
};

let gamer2 = {
    name: prompt("Name 2", ""),
    index: false
};

console.log(gamer2.name);

let currentGamer = true;
let targetLetter;
let timeLimit = 10;

setInterval(function () {
    // Номер игрока
    if (timeLimit == 0) {
        let looser;
        if (currentGamer == gamer1.index)
            looser = gamer1.name;
        else if (currentGamer == gamer2.index)
            looser = gamer2.name;
        alert("Проишрал игрок " + looser);
        window.location.reload();
    }
    else {
        timeLimit--;
        time.textContent = timeLimit;
    }

}, 1000);

okBtn.addEventListener('click', function () {
    // добавить проверку на левый и правый классы
    if (inputLetter.value != "") {
        timeLimit = 10;
        currentGamer = !currentGamer;
        proverkaGreen();
        targetLetter.innerText = inputLetter.value;
        inputLetter.value = "";
        let newLetter = [];
        if (targetLetter.className == 'letter left-letter') {
            newLetter[0] = document.createElement('DIV');
            newLetter[0].className = 'letter left-letter';
            word.insertAdjacentElement("afterbegin", newLetter[0]);
        }
        else if (targetLetter.className == 'letter right-letter') {
            newLetter[0] = document.createElement('DIV');
            newLetter[0].className = 'letter right-letter';
            word.insertAdjacentElement("beforeend", newLetter[0]);
        }
        else {
            for (let i = 0; i < 2; i++) {
                newLetter[i] = document.createElement('DIV');
                newLetter[i].className = 'letter';
                switch (i) {
                    case 0:
                        newLetter[i].className += ' left-letter';
                        word.insertAdjacentElement("afterbegin", newLetter[i]);
                        break;
                    case 1:
                        newLetter[i].className += ' right-letter';
                        word.insertAdjacentElement("beforeend", newLetter[i]);
                        break;
                }
            }
            console.log("ok");
        }
    }
}
);

function proverkaGreen() {
    if (targetLetter != undefined)
        targetLetter.style.borderColor = 'red';
}

word.addEventListener('click', function (event) {
    if ((event.target.className == 'letter' || event.target.className == 'letter left-letter' || event.target.className == 'letter right-letter') && event.target.innerText == "") {
        console.log(event);
        proverkaGreen();
        targetLetter = event.target;
        targetLetter.style.borderColor = 'green';
    }
});