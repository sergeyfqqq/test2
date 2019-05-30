let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY/MM/DD');

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

for (let i = 0; i < 2; i++) {
  let expenses = prompt('Введите обязательную статью расходов в этом месяце'),
      expensesCost = prompt('Во сколько обойдется?');
  
  if ( typeof(expenses) === 'string' && typeof(expenses) != null && typeof(expensesCost) != null
  && expenses != '' && expensesCost != '') {
    console.log('done');
    appData.expenses[expenses] = expensesCost;
  } else {
    i = i - 1;
  };
};

appData.monePerDay = appData.budget / 30;































// let btns = document.querySelectorAll('.btn');

// btns.forEach(function(item){
//     item.addEventListener('click', function(e){
//         console.log('U clicked to ' + e + ' element');
//     });
// });

