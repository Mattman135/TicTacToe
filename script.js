// This doesnt allow me to declare any global variables. However I can declare variables inside a factory or module. 
// This will practice using factory functions and modules.
"use strict";


/*
- Gameboard object, innehålla board med alla celler för att kunna göra CSS, addEventlistener
- behöver ett playGame objekt. Denna kör hela ronden, ända tills nån vinner förlorar?
Behöver innehålla, players, vad dom klickar, updatera brädet, kolla vem som vinner,


- N. 4: build the function that adds a symbol on the clicked cell
 -addEventlistener "click"
 -when one is clicked remove addEventlistener
 -add class circle or cross
  -shoudl be in createBoard
 -need a round variable that checks who's turn it is, always start with X, even round print X not even print O. Use modulo.
  -should be in displayController
  -how do I make Gameboard inherit the round variable?
 */

const Players = () => {
    this.playerX = "X";
    this.playerO = "O";

    const getSymbols = () => {
        return { playerX, playerO };
    }

    return { getSymbols };
}

const Gameboard = (() => {
    const gameBoard = document.querySelector('#gameboard');
    const infoDisplay = document.querySelector('#info');
    const cellElements = ["", "", "", "", "", "",  "", "",  ""];

    

    const createBoard = () => {
        cellElements.forEach((_cell, index) => {
            const div = document.createElement('div');
            div.classList.add('square');
            div.id = index;
            div.addEventListener('click', addGo)
            gameBoard.appendChild(div);
        })
    }

    const addGo = (e) => {
        const div2 = document.createElement('div');
        div2.classList.add('circle');
        e.target.appendChild(div2);
        e.target.removeEventListener('click', addGo);
    }

    return { createBoard }

})();

const displayController = (() => {

    const playerX = Players().getSymbols().playerX;
    const playerO = Players().getSymbols().playerO;
    const board = Gameboard.createBoard();
    let round = 1;


})();