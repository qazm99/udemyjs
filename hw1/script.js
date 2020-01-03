'use strict';

let budget = prompt("Ваш бюджет на месяц?", 1000000);
let timeData = prompt("!!!Введите дату в формате YYYY-MM-DD", '2020-01-01');

let appData = {
    budget,
    timeData,

    expenses: {

    },

    optionalExpenses: {

    },

    income: []
}

appData.budget = budget;
appData.timeData = timeData;
appData.expenses[prompt("Введите статью расходов")] = prompt("Сумма на эти расходы");
appData.expenses[prompt("Введите статью расходов")] = prompt("Сумма на эти расходы");
alert("Ваш бюджет на день: "+appData.budget/30+" рублей.");
console.log(appData);
