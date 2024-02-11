// This doesnt allow me to declare any global variables. However I can declare variables inside a factory or module.
// This will practice using factory functions and modules.
"use strict"

const Gameboard = (() => {
  const infoDisplay = document.querySelector("#info")
  const gameBoard = document.querySelector("#gameboard")
  const cellElements = ["", "", "", "", "", "", "", "", ""]
  const restartBtn = document.querySelector("#restartBtn")

  let round = 1
  let go = "cross"
  infoDisplay.textContent = `It's round ${round} and ${go}'s turn`

  const crossBtn = document.querySelector("#cross")
  const circleBtn = document.querySelector("#circle")

  crossBtn.addEventListener("click", () => {
    go = "cross"
    infoDisplay.textContent = `It's round ${round} and ${go}'s turn`
  })

  circleBtn.addEventListener("click", () => {
    go = "circle"
    infoDisplay.textContent = `It's round ${round} and ${go}'s turn`
  })

  restartBtn.addEventListener("click", () => {
    deleteBoard(gameBoard)
    createBoard()
    round = 0
    go = "cross"
    infoDisplay.textContent = `It's round ${round} and ${go}'s turn`
  })

  const deleteBoard = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }

  const createBoard = () => {
    cellElements.forEach((_cell, index) => {
      const div = document.createElement("div")
      div.classList.add("square")
      div.id = index
      div.addEventListener("click", addGo)
      gameBoard.append(div)
    })
  }

  const addGo = (e) => {
    const div2 = document.createElement("div")
    div2.classList.add(go)
    e.target.append(div2)
    go = go === "circle" ? "cross" : "circle"
    round++
    infoDisplay.textContent = `It's round ${round} and ${go}'s turn`
    e.target.removeEventListener("click", addGo)
    checkWinner()
  }

  const checkWinner = () => {
    const allSquares = document.querySelectorAll(".square")

    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    winCombinations.forEach((arr) => {
      const crossWins = arr.every((cell) =>
        allSquares[cell].firstChild?.classList.contains("cross")
      )

      if (crossWins) {
        infoDisplay.textContent = "Cross wins"
        allSquares.forEach((square) =>
          square.replaceWith(square.cloneNode(true))
        )
        return
      } else if (round === 10 && !crossWins) {
        infoDisplay.textContent = `It's a draw`
        allSquares.forEach((square) =>
          square.replaceWith(square.cloneNode(true))
        )
        return
      }
    })

    winCombinations.forEach((arr) => {
      const circleWins = arr.every((cell) =>
        allSquares[cell].firstChild?.classList.contains("circle")
      )

      if (circleWins) {
        infoDisplay.textContent = "Circle wins"
        allSquares.forEach((square) =>
          square.replaceWith(square.cloneNode(true))
        )
        return
      } else if (round === 10 && !circleWins) {
        infoDisplay.textContent = `It's a draw`
        allSquares.forEach((square) =>
          square.replaceWith(square.cloneNode(true))
        )
        return
      }
    })
  }

  return { createBoard }
})()

const displayController = (() => {
  const Board = Gameboard
  Board.createBoard()
})()
