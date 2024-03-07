// List card types
let cardType=[
    "Diamond",
    "Club",
    "Heart",
    "Spade"
]
// List card images
let cardImages=[
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentcolor" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16"><path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2"/></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentcolor" class="bi bi-suit-club-fill" viewBox="0 0 16 16"><path d="M11.5 12.5a3.5 3.5 0 0 1-2.684-1.254 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5"/></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentcolor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16"><path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentcolor" class="bi bi-suit-spade-fill" viewBox="0 0 16 16"><path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907"/></svg>`
]
// List card names
let cardName=[
    ["A","Ace"],
    ["2","Two"],
    ["3","Three"],
    ["4","Four"],
    ["5","Five"],
    ["6","Six"],
    ["7","Seven"],
    ["8","Eight"],
    ["9","Nine"],
    ["10","Ten"],
    ["J","Jack"],
    ["Q","Queen"],
    ["K","King"]
]
// Create a variable to save cards
let cardList=[]
for(type in cardType){
    for(name in cardName){
        if(cardType[type]=="Diamond"){
            createCard(cardImages[0])
        }
        else if(cardType[type]=="Club"){
            createCard(cardImages[1])
        }
        else if(cardType[type]=="Heart"){
            createCard(cardImages[2])
        }
        else if(cardType[type]=="Spade"){
            createCard(cardImages[3])
        }
    }
}
// Create a function to create a card, using cardImage as parameter to add images to card
function createCard(cardImage){
    cardList.push(`<label for="${cardType[type]}${cardName[name][0]}" class="card ${cardType[type]}"><input type="checkbox" id="${cardType[type]}${cardName[name][0]}" checked><div class="card-info-container"><div class="card-name"><p>${cardName[name][0]}</p>${cardImage}</div><div class="card-name"><p>${cardName[name][0]}</p>${cardImage}</div><div class="card-text"><p class="i1"><span class="yellow">var</span> card = {</p><p class="i2"><span class="blue">rank</span>: <span class="green">${cardName[name][0]}</span>,</p><p class="i2"><span class="blue">suit</span>: <span class="green">"${cardType[type]}"</span>,</p><p class="i2"><span class="blue">name</span>: <span class="green">"${cardName[name][1]}"</span></p><p class="i1">}</p></div></div><div class="card-back"></div></label>`)
}
// Create a variable to save the cards in a string
let finalCardList=""
// Create a variable to save a random number
let randomCard
// Create a loop to select a random card from cardList, save selected card on finalCardList, and after, remove selectedCard from finalCardList
/*
while(cardList.length>0){
    randomCard=Math.floor(Math.random() * cardList.length);
    finalCardList=finalCardList+cardList[randomCard]
    cardList.splice(randomCard, 1);
}
*/
function getCards(player){
    for(x=0;x<5;x++){
        randomCard=Math.floor(Math.random() * cardList.length);
        finalCardList=finalCardList+cardList[randomCard]
        cardList.splice(randomCard, 1);
    }
    player.innerHTML=finalCardList
    finalCardList=""
}
// Create a variable to find .cards-container
let cardsCotainer=document.querySelector(".cards-container")
// find players
let player1=document.querySelector(".player-1")
let player2=document.querySelector(".player-2")
// Add finalCardList to cardsCotainer element
getCards(player1)
getCards(player2)