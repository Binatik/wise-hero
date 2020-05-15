//Global
const lItem1 = document.getElementById('it1');
const lItem2 = document.getElementById('it2');
const formPanelTested = document.querySelector('.form__panel_tested');
const mistake = document.querySelector('.mistake');
const itemScore = document.querySelector('.score');
const itemlvl = document.querySelector('.lvl');
let score = 0;
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
        if (score <= 3) {
            this.setRandomTask(1, 3);
            itemlvl.innerHTML = `Уровень: 1 (Гость)`;
        } else if (score >= 4 && score <= 15) {
            this.setRandomTask(5, 10);
            itemlvl.innerHTML = `Уровень: 2 (Прохожий)`;
        } else if (score >= 16 && score <= 30) {
            this.setRandomTask(12, 30);
            itemlvl.innerHTML = `Уровень: 3 (Знающий)`;
        } else if (score >= 31 && score <= 53) {
            this.setRandomTask(17, 23);
            itemlvl.innerHTML = `Уровень: 4 (Опытный)`;
        } else if (score >= 54 && score <= 79) {
            this.setRandomTask(33, 122);
            itemlvl.innerHTML = `Уровень: 5 (Продвинутый)`;
        } else if (score >= 80 && score <= 99) {
            this.setRandomTask(123, 4312);
            itemlvl.innerHTML = `Уровень: 6 (Гений)`;
        }
    }

    checkAnswer() {
        const text = itemScore.innerHTML = `Ваш счет:`;
        if (+formPanelTested.value === this.answer) {
            formPanelTested.value = '';
            mistake.innerHTML = 'Правильно, продолжай еще.';
            score++
            itemScore.innerHTML = `${text} ${score}`;
            this.getRandom();
        } else if (formPanelTested.value !== '') {
            mistake.innerHTML = 'Неправильно';
            score--
            itemScore.innerHTML = `${text} ${score}`;
        } else if (formPanelTested.value === '') {
            mistake.innerHTML = 'Вы не ввели число';
        }
    }
}
const task = new Task();