//Global 
let score = localStorage.getItem("score");
if (score === undefined || score === null || isNaN(score)) localStorage.setItem("score", 0);
const lItem1 = document.getElementById('it1');
const lItem2 = document.getElementById('it2');
const formPanelTested = document.querySelector('.form__panel_tested');
const mistake = document.querySelector('.mistake');
const itemScore = document.querySelector('.score');
const itemlvl = document.querySelector('.lvl');
const textg = itemScore.innerHTML = `Ваш счет: ${score}`;
let lvl = 1;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Task {

    constructor() {
        this.answer = null;
        document.querySelector('.form__button').addEventListener('click', this.checkAnswer.bind(this));
        this.getRandom();
    }

    setRandomTask(min, max) {
        const randomA = random(min, max);
        const randomB = random(min, max);
        lItem1.innerHTML = randomA + ' +';
        lItem2.innerHTML = randomB + ' =';
        this.answer = randomA + randomB;
    }

    getRandom() {
        if (score <= -1) {
            this.setRandomTask(1, 3);
            itemlvl.innerHTML = `Уровень: 0 (Деградированный)`; 
            itemlvl.style.fontSize = '10px';
        } else if (score >= 0 && score <= 4) {
            this.setRandomTask(2, 5);
            itemlvl.innerHTML = `Уровень: 2 (Гость)`; 
            itemlvl.style.fontSize = '12px'; 
        } else if (score >= 5 && score <= 15) {
            this.setRandomTask(5, 10);
            itemlvl.innerHTML = `Уровень: 2 (Прохожий)`; 
            itemlvl.style.fontSize = '14px'; 
        } else if (score >= 16 && score <= 30) {
            this.setRandomTask(12, 30);
            itemlvl.innerHTML = `Уровень: 3 (Знающий)`; 
            itemlvl.style.fontSize = '16px';
        } else if (score >= 31 && score <= 53) {
            this.setRandomTask(17, 99);
            itemlvl.innerHTML = `Уровень: 4 (Опытный)`; 
            itemlvl.style.fontSize = '18px';
        } else if (score >= 54 && score <= 79) {
            this.setRandomTask(33, 763);
            itemlvl.innerHTML = `Уровень: 5 (Продвинутый)`; 
            itemlvl.style.fontSize = '20px';
        } else if (score >= 80 && score <= 99) {
            this.setRandomTask(123, 2731);
            itemlvl.innerHTML = `Уровень: 6 (Старший)`; 
            itemlvl.style.fontSize = '21px';
        } 
        else if (score >= 100 && score <= 199) {
            this.setRandomTask(31, 34731);
            itemlvl.innerHTML = `Уровень: 6 (Профессор)`; 
            itemlvl.style.fontSize = '22px';
        } 
        else if (score >= 200) {
            this.setRandomTask(31, 34731);
            itemlvl.innerHTML = `Уровень: 6 (Гений)`; 
            itemlvl.style.fontSize = '24px';
        }
    }

    checkAnswer() {
        if (+formPanelTested.value === this.answer) {
            formPanelTested.value = '';
            mistake.innerHTML = 'Правильно, продолжай еще.';
            score = localStorage.getItem("score");
            score++;
            itemScore.innerHTML = `Ваш счет: ${score}`
            localStorage.setItem("score", score);
            this.getRandom();
        } else if (formPanelTested.value !== '') {
            mistake.innerHTML = 'Неправильно';
            score = localStorage.getItem("score");
            score--;
            itemScore.innerHTML = `Ваш счет: ${score}`
            localStorage.setItem("score", score);
        } else if (formPanelTested.value === '') {
            mistake.innerHTML = 'Вы не ввели число';
        }
    }
}
const task = new Task();