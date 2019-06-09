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
    dayValue = document.getElementById('dayValue'),
    
    
    expensesConfirmBtn = document.getElementById('expensesConfirmBtn'),
    optionalConfirmBtn = document.getElementById('optionalConfirmBtn'),
    perDayBtn = document.getElementById('perDayBtn'),
    otherIncomeBtn = document.getElementById('otherIncomeBtn'),
    depositCheckBtn = document.getElementById('deposit'),
    depositSum = document.getElementById('sum'),
    depositPercent = document.getElementById('percent'),
    
    expensesInput = document.querySelectorAll('.main__expenses_input'),
    otherIncomeInput = document.getElementById('otherIncome'),
    optionalInput = document.querySelectorAll('.main__optional_input');

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

expensesConfirmBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let sum = 0;

    for (let i = 0; i < expensesInput.length; i++) {
        let expenses = expensesInput[i].value,
            expensesCost = expensesInput[++i].value;
        
        if ( typeof(expenses) === 'string' && typeof(expenses) != null && typeof(expensesCost) != null
        && expenses != '' && expensesCost != '') {
          console.log('done');
          appData.expenses[expenses] = expensesCost;
          sum += +expensesCost;
        } else {
          i = i - 1;
        }
    }

    expensesValue.textContent = sum;
});

optionalConfirmBtn.addEventListener('click', function(e){
    e.preventDefault();
    for (let i = 0; i < optionalInput.length; i++) {
        let optionalExpenses = optionalInput[i].value;
        appData.optionalExpenses[i] = optionalExpenses;
        optionalValue.textContent += optionalExpenses + ' ';
    }
});

perDayBtn.addEventListener('click', function(e){
    e.preventDefault();

    if (appData.budget) {
        appData.monePerDay = (money/30).toFixed();

        perDayValue.textContent = appData.monePerDay;

        if (appData.monePerDay <= 1000) {
            level.textContent = 'bomj';
        } else if (appData.monePerDay <= 5000) {
            level.textContent = 'norm';
        } else {
            level.textContent = 'krasava';
        }
    } else {
        level.textContent = 'error'
    }
    
});

otherIncomeInput.addEventListener('change', function(e){
    e.preventDefault();

    let incomeItems = otherIncomeInput.value;
    appData.income = incomeItems.split(', ');
    otherValue.textContent = appData.income;

});

depositCheckBtn.addEventListener('click', function(e){

    if (appData.savings) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

depositSum.addEventListener('input', function(e){

    e.preventDefault();

    if (appData.savings) {
        let sum = +depositSum.value,
            percent = +depositPercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIconme = sum/100*percent;

        perMonth.textContent = appData.monthIncome = sum/100/12*percent;
        perYear.textContent = appData.yearIconme = sum/100*percent;
    }

});

depositPercent.addEventListener('input', function(e){

    e.preventDefault();

    if (appData.savings) {
        let sum = +depositSum.value,
            percent = +depositPercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIconme = sum/100*percent;

        perMonth.textContent = appData.monthIncome = sum/100/12*percent;
        perYear.textContent = appData.yearIconme = sum/100*percent;
    }

});

// otherIncomeBtn.addEventListener('click', function(e){
//     e.preventDefault();

//     let otherIncomeValue = otherIncome.value; 
//     otherValue.textContent = otherIncomeValue;
// });












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