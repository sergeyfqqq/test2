let money,
    time;

function start() {
  money = +prompt('Ваш бюджет на месяц?');

  while (isNaN(money)|| money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?');
  }

  time = prompt('Введите дату в формате YYYY/MM/DD');
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {
      
    },
    optionalExpenses: {

    },
    income: [],
    savings: false
};

function chooseYourExpenses() {
  for (let i = 0; i < 2; i++) {
    let expenses = prompt('Введите обязательную статью расходов в этом месяце'),
        expensesCost = prompt('Во сколько обойдется?');
    
    if ( typeof(expenses) === 'string' && typeof(expenses) != null && typeof(expensesCost) != null
    && expenses != '' && expensesCost != '') {
      console.log('done');
      appData.expenses[expenses] = expensesCost;
    } else {
      i = i - 1;
    }
  }
}
chooseYourExpenses();

appData.monePerDay = (appData.budget / 30).toFixed();

function unnamed() {
  if (appData.monePerDay < 1000) {
    appData.abundance = 'bomj';
  } else if (appData.monePerDay < 5000) {
    appData.abundance = 'norm';
  } else {
    appData.abundance = 'krasava';
  }
}
unnamed();































// let btns = document.querySelectorAll('.btn');

// btns.forEach(function(item){
//     item.addEventListener('click', function(e){
//         console.log('U clicked to ' + e + ' element');
//     });
// });

