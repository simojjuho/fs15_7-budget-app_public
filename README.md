# Getting Started with React Components & React Hooks
by: Juho Simojoki
App made as an assignment for Integrify Finland Full-stack academy (Microsoft stack)

This assignment requires also TypeScript when passing props to React Components

## Description

The project aim is to do an app as is written in the following chapters. So far I have not implemented styles other than making some initial layout.

With this app the user is able to store some incomes and expenses into the app state and plan saving some of the money left. Progress bar on the right is showing the progress according to saving target set by the user.

## Missing parts

1. I already started making an editing possibility, but I have not yet finished it.
2. Styles. Nothing much, but the style needs to be more creative and colourful. Buttons must be modern looking and the background image or linear-gradient must be set.

This list is not exhaustive, there still might be, and for sure there is, some other enhancements needed but not mentioned here.

## Requirements

1. Create a simple one-page application to store incomes and expenses, and set
saving target.
2. Account balance can be calculated from incomes, expenses, and saving.
`incomes - expenses - saving = balance`
3. Users should be able to add new incomes, expenses, transfer from balance account to saving account, and reset saving target. Balance should never be negative number.
4. Use React Hooks where applicable. TypeScript must be used at least for the props types.
5. Style is not the priority in this assignment.

## Bonus point

1. Add function to transfer money back from saving account to current balance.
2. Set source of incomes and expenses as the select elements with the categories of your choice.
3. Add edit/delete button and according functions for incomes and expenses.
4. Use `d3` package to print out 2 piecharts for incomes and expenses in categories (I only give bonus point when you use `d3`, not the other handier libraries).

## Project tree

```
.
├── demo1.png
├── demo2.png
├── demo3.png
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── CurrentBalance.tsx
│   │   ├── Expenses.tsx
│   │   ├── Income.tsx
│   │   ├── Input.tsx
│   │   ├── Progress.tsx
│   │   └── TransactionComponent.tsx
│   ├── hooks.ts
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── styles
│   │   ├── commonProperties
│   │   │   ├── buttons.css
│   │   │   ├── buttons.css.map
│   │   │   └── buttons.scss
│   │   ├── index.css
│   │   ├── index.css.map
│   │   ├── index.scss
│   │   └── _main.scss
│   ├── types.ts
│   └── utils.ts
└── tsconfig.json

```
