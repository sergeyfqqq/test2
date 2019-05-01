// let money = prompt('Ваш бюджет на месяц?'),
//     time = prompt('Введите дату в формате YYYY/MM/DD');

// let appData = {
//     budget: money,
//     timeData: time,
//         expenses: {

//     },
//         optionalExpenses: {

//     },
//     income: [],
//     savings: false
// };

let btns = document.querySelectorAll('.btn');

btns.forEach(function(item){
    item.addEventListener('click', function(e){
        console.log('U clicked to ' + e + ' element');
    });
});

