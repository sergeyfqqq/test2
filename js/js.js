let money = prompt('Ваш бюджет на месяц?'),
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

for (let i = 0; i < 2; i++ ) {
  let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      a1 = prompt('Во сколько обойдется?', '');
    console.log('done');
    appData.expenses[a] = a1;
};































// let btns = document.querySelectorAll('.btn');

// btns.forEach(function(item){
//     item.addEventListener('click', function(e){
//         console.log('U clicked to ' + e + ' element');
//     });
// });

