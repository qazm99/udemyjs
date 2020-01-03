'use strict';

let money = prompt("Ваш бюджет на месяц?", 1000000);
let time = prompt("!!!Введите дату в формате YYYY-MM-DD", '2020-01-01');

let appData = {
    budget,
    timeData,

    expenses: {

    },

    optionalExpenses: {

    },

    income: []
}

appData.budget = money;
appData.timeData = time;
appData.expenses[prompt("Введите статью расходов")] = prompt("Сумма на эти расходы");
appData.expenses[prompt("Введите статью расходов")] = prompt("Сумма на эти расходы");
alert("Ваш бюджет на день: "+appData.budget/30+" рублей.");
console.log(appData);
