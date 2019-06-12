// let money,
//     time;

// function start() {
//   money = +prompt('Ваш бюджет на месяц?');

//   while (isNaN(money)|| money == '' || money == null) {
//     money = +prompt('Ваш бюджет на месяц?');
//   }

//   time = prompt('Введите дату в формате YYYY/MM/DD');
// }
// start();

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {
      
//     },
//     optionalExpenses: {

//     },
//     income: [],
//     savings: false,
//     chooseYourExpenses: function () {
//       for (let i = 0; i < 2; i++) {
//         let expenses = prompt('Введите обязательную статью расходов в этом месяце'),
//             expensesCost = prompt('Во сколько обойдется?');
        
//         if ( typeof(expenses) === 'string' && typeof(expenses) != null && typeof(expensesCost) != null
//         && expenses != '' && expensesCost != '') {
//           console.log('done');
//           appData.expenses[expenses] = expensesCost;
//         } else {
//           i = i - 1;
//         }
//       }
//     },
//     chooseOptionalExpenses: function() {
//       for (let i = 0; i < 3; i++) {
//         let optionalExpenses = prompt('Введите не обязательную статью расходов в этом месяце'),
//             optionalExpensesCost = prompt('Во сколько обойдется?');
        
//         if ( typeof(optionalExpenses) === 'string' && typeof(optionalExpenses) != null && typeof(optionalExpensesCost) != null
//         && optionalExpenses != '' && optionalExpensesCost != '') {
//           console.log('done');
//           appData.optionalExpenses[optionalExpenses] = optionalExpensesCost;
//         } else {
//           i = i - 1;
//         }
//       }
//     },
//     detectDayBudget: function() {
//       appData.monePerDay = (appData.budget / 30).toFixed();
//       alert(appData.monePerDay);
//     },
//     checkSavings: function() {
//       let savings = confirm('У Вас имеются збережения на депозите?');
  
//       if (savings) {
//         appData.savings = true;
//         let money = prompt('Введите сумму сбережений'),
//             percent = +prompt('Под какой процент?');
    
//         appData.monthIncome = money/100/12*percent;
//         alert('Доход с вашего депозита ' + appData.monthIncome);
//       }
//     },
//     detectLevel: function() {
//       if (appData.monePerDay < 1000) {
//         appData.abundance = 'bomj';
//       } else if (appData.monePerDay < 5000) {
//         appData.abundance = 'norm';
//       } else {
//         appData.abundance = 'krasava';
//       }
//     },
//     chooseIncome: function() {
//       let incomeItems = prompt('Что принесёт вам дополнительный доход? (перечислите через запятую)', '');
//       if (incomeItems == null || incomeItems == '') {
//           appData.chooseIncome();
//       }
//       appData.income = incomeItems.split(',');
//       appData.income.forEach(function(item) {
//       let result = item;
//         alert('Способы доп. зработка:' + result);
//       });
//     }
// };


// function appDataInfo() {
//   console.log('Наша программа включает в себя данные: ');
//   for (let prop in appData) {
//     console.log(prop);
//   }
// }
// appDataInfo();




// let name = 'sergey',
//     age = '22',
//     sex = 'male';

// document.write(`<h1>Пользователю ${name} ${age} года. Его пол ${sex}</h1>`);




let uah = document.getElementById('uah'),
    usd = document.getElementById('usd');

uah.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', '/js/currnet.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function(){
        if (request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);

            usd.value = uah.value / data.usd.toFixed();
        } else {
            usd.value = 'Извините, что-то пошло не так :С';
        }
    });
});




















