const grid = document.querySelector('.grid');
const scoreSpan = document.getElementById('score-span')
let chosenCardNames = [];
let chosenCards = [];
let score = 0;

const cards = [
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

const shuffledCards = cards.sort(() => 0.5 - Math.random())

function drawCards(arr) {
    arr.forEach((obj, index) => {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.dataset.id = index
        card.addEventListener('click', clickHandler)
        grid.appendChild(card)
    })
}

drawCards(shuffledCards)

function flipCard(elem, name) {
    elem.src = `images/${name}.png`;
    chosenCards.push(elem)
    chosenCardNames.push(name)
}

function match(array) {
    array.forEach(elem => {
        elem.src = 'images/white.png'
        elem.removeEventListener('click', clickHandler)
    })
    score++
    scoreSpan.textContent = score;
}

function noMatch(array) {
    array.forEach(elem => elem.src = 'images/blank.png')
}

function checkPair(arr) {
    if (arr[0] === arr[1]) {
        match(chosenCards)
    } else {
        noMatch(chosenCards)
    }
    chosenCards = [];
    chosenCardNames = [];
}

function clickHandler(e) {
    const card = e.target;
    const cardName = shuffledCards[e.target.dataset.id].name
    if (chosenCardNames.length === 0) {
        flipCard(card, cardName)
    } else
    if (chosenCardNames.length === 1 && chosenCards[0] !== card) {
        flipCard(card, cardName)
        setTimeout(checkPair, 500, chosenCardNames)
    }
}