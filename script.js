// This doesnt allow me to declare any global variables. However I can declare variables inside a factory or module. 
// This will practice using factory functions and modules.
"use strict";


/*
- Gameboard object, innehålla board med alla celler för att kunna göra CSS, addEventlistener
- behöver ett playGame objekt. Denna kör hela ronden, ända tills nån vinner förlorar?
Behöver innehålla, players, vad dom klickar, updatera brädet, kolla vem som vinner,
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
            gameBoard.appendChild(div);
        })
    }

    return { createBoard }
})();

const displayController = (() => {

    const players = Players();
    const playerX = players.getSymbols().playerX;
    const playerO = players.getSymbols().playerO;
    const board = Gameboard.createBoard();


})();