let startBtn = document.getElementById('start'),
    budgetValue = document.getElementById('budgetValue'),
    perDay = document.getElementById('perDayValue'),
    level = document.getElementById('levelValue'),
    expenses = document.getElementById('expensesValue'),
    optional = document.getElementById('optionalValue'),
    other = document.getElementById('otherValue'),
    perMonth = document.getElementById('percentMonthValue'),
    perYear = document.getElementById('percentYearValue'),
    yearValue = document.getElementById('yearValue'),
    monthValue = document.getElementById('monthValue'),
    dayValue = document.getElementById('dayValue');

let money, date;

startBtn.addEventListener('click', function(e){
    e.preventDefault();

    date = prompt('Введите дату в формате YYYY/MM/DD');
    money = +prompt('Ваш бюджет на месяц?');

    while (isNaN(money)|| money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?');
    }

    appData.budget = money;
    appData.timeData = date;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(date)).getFullYear();
    monthValue.value = new Date(Date.parse(date)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(date)).getDay();
});
















let appData = {
    budget: money,
    timeData: date,
    expenses: {
      
    },
    optionalExpenses: {

    },
    income: [],
    savings: false,
};