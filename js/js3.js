'use strict';
    
let tabsHeader = document.querySelector('.tabs__header'),
    tabs = document.querySelectorAll('.tabs__tab'),
    tabContent = document.querySelectorAll('.tabs__tabcontent');
    
function hideTabs(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
}
    
hideTabs(1);

function showTabs(b) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

tabsHeader.addEventListener('click', function(event) {
    let target = event.target;
    
    if (target && target.classList.contains('tabs__tab')) {
        for (let i = 0; i < tabs.length; i++) {
            if (target == tabs[i]) {
                hideTabs(0);
                showTabs(i);
                break; 
            }
        }
    }
});

// let age = document.getElementById('age'),
//     surname = 'fastovets',
//     name = 'sergey';

// let user = {
//     'age' : age.value,
//     'surname' : surname,
//     'name' : name,
//     showUser: function() {
//         alert("Пользователь " + surname + " " + name + ", его возраст " + this.age);
//     }
// };

// user.showUser();


