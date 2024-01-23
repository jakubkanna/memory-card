# Pseudocode:

## Menu Component({hidden}):

- ### Message({message=rules}) Component

  - if `currentScore === 0` display rules (initially)

- ### Button Component

  - "New Game" button, which `onClick`:
    - `clear(memorizedPokemonArr)` (restart game).
    - displays Difficulty buttons: easy,medium,hard value.

## Button Component

- burgerIcon
- `onClick` displays/hides Menu

## CurrentScore Component:

- Display the `currentScore` (`memorizedPokemonArr.length`). Update it when on the value change. (each round)

## Board Component

- `fetchedPokemonArr` = fetch number of Pokemon basing on clicked new game value: if `'easy'` do random from 0 - 1/4, `'medium'` 0 - 1/2, `'hard'` 0 - length

- render cards

- has `memorizedPokemonArr` on update render new cards (new round)

- ### Card Component:

  - Has img and value
  - onClick: `handleClick`

## handleClick()

`    round(memorizedPokemonArr, fetchedPokemonArr, value)`

## win()

- display Menu, rerender message with `gameWinnerMessage`
- store and update LocalStorage `winCount`

## clearScore(arr)

- return arr=[]

## round(memorized, fetched, cardValue)

- `memorized.find (element) => element.value === cardValue ? { memorized.length === fetched.length ? win() : clearScore(memorized)} : push to arr`

# TODO

Base:

General:

- difficulty can be implemented in the future
- markdown rules can be implemented in the future
