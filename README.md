# Programming Logic — Dive into Programming with JavaScript

Course project from **Alura**, focused on learning programming logic fundamentals using JavaScript. The repository contains the main project (a secret number guessing game) and a set of small challenges that practice the core concepts step by step.

## Project Structure

```
.
├── principal-project/        # Secret number guessing game
│   ├── app.js
│   ├── index.html
│   └── style.css
└── challenges/               # Practice exercises
    ├── balance/
    ├── counter/
    ├── driver-license/
    ├── game-score/
    ├── input-counter/
    ├── input-reverse-counter/
    ├── positive-or-negative/
    ├── reverse-counter/
    ├── sum/
    ├── week/
    ├── welcome/
    └── welcome-user/
```

## Main Project — Secret Number Game

A small browser game where the player has to guess a randomly generated secret number between 1 and a configurable `maxRange`. After each guess, the game tells the player whether the secret number is higher or lower, and at the end it shows how many attempts were used.

Key concepts applied:

- Generating random numbers with `Math.random()`
- Converting strings to integers with `parseInt()`
- Looping until a condition is met (`while`)
- Conditional branching (`if` / `else`)
- Counting iterations (attempts)
- String interpolation with template literals
- Singular/plural handling using the ternary operator

## Challenges

Each challenge isolates a single concept:

| Challenge | Concept |
|-----------|---------|
| `welcome` | Variables, `console.log`, `prompt` |
| `welcome-user` | Reading user input and displaying it |
| `balance` | Variables and template literals |
| `sum` | Reading numbers and converting types with `parseInt` |
| `game-score` | `if` / `else` conditionals |
| `positive-or-negative` | Numeric comparison |
| `driver-license` | Multiple inputs and conditional access |
| `week` | `if` / `else if` / `else` chains |
| `counter` | `while` loop (increment) |
| `reverse-counter` | `while` loop (decrement) |
| `input-counter` | Looping based on user input |
| `input-reverse-counter` | Decrementing loop based on user input |

## What I Learned

- **Variables and types**: declaring with `let`, working with strings and numbers, and converting between them with `parseInt()`.
- **User interaction in the browser**: using `prompt()` to read input and `alert()` / `console.log()` to show output.
- **Conditional logic**: writing `if`, `else if`, and `else` to make decisions based on data.
- **Loops**: using `while` to repeat actions, with both incrementing and decrementing counters, and loops that depend on user input.
- **Operators**: arithmetic, comparison, and the ternary operator for concise conditional expressions.
- **Template literals**: building dynamic strings with `${}` instead of concatenation.
- **Randomness**: using `Math.random()` together with `parseInt()` to generate integers within a range.
- **Breaking down problems**: turning a goal (like "guess a number") into smaller logical steps — initial state, repetition, condition check, feedback, and final result.

## How to Run

Open the `index.html` file of either the main project or any of the challenges in a browser. Inputs and messages appear through the browser's native dialogs (`prompt` / `alert`), and additional output can be inspected in the developer console.

## Course

Lógica de programação: mergulhe em programação com JavaScript — [Alura](https://www.alura.com.br/)
