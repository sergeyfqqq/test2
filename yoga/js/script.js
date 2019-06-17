window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    //tabs 

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function addPopups() {
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].querySelector('.description-btn').addEventListener('click', function(){
                showPopup();
            });
        }
    }

    addPopups();

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //timer

    let deadline = '2019-06-20';

    function getTimeRemaining(endtime) {
        let time = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((time/1000) % 60),
            minutes = Math.floor((time/1000/60) % 60),
            hours = Math.floor((time/(1000*60*60)));

        return {
            'total' : time,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let time = getTimeRemaining(endtime);
            hours.textContent = ('0' + time.hours).slice(-2);
            minutes.textContent = ('0' + time.minutes).slice(-2);
            seconds.textContent = ('0' + time.seconds).slice(-2); 

            if (time.total <=0 ) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00'; 
            }
        }
    }

    setClock('timer', deadline);

    // modal popups

    let more = document.querySelector('.more'),
        popup = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');


    function showPopup() {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closePopup() {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    }

    more.addEventListener('click', function() {
        showPopup();
    });

    close.addEventListener('click', function(){
        closePopup();
    });

    // form

    // let message = {
    //     loading: 'Loading...',
    //     success: 'Спасибо, скоро мы с Вами свяжемся!',
    //     failure: 'Извините, что-то пошло не так :С'
    // };

    // let form = document.querySelector('.main-form'),
    //     input = document.getElementsByTagName('input'),
    //     statusMessage = document.createElement('div');

    //     statusMessage.classList.add('status');

    //     form.addEventListener('submit', function(event){
    //         event.preventDefault();

    //         form.appendChild(statusMessage);

    //         let request = new XMLHttpRequest();
    //         request.open('POST', 'server.php');
    //         request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    //         let formData = new FormData(form);
    //         request.send(formData);

    //         request.addEventListener('readystatechange', function() {

    //         });

    //         for (let i = 0; i < input.length; i++) {
    //             input[i].value = '';
    //         }
    //     });


    // SLIDER 

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        sliderDotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);
    function showSlides(num) {
        if (num > slides.length) {
            slideIndex = 1;
        } 
        if (num < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        //same functions
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function swipeSlides(num) {
        showSlides(slideIndex += num);   
    }
    function currentSlide(num) {
        showSlides(slideIndex = num);
    }

    prev.addEventListener('click', function(){
        swipeSlides(-1);
    });
    next.addEventListener('click', function(){
        swipeSlides(1);
    });

    sliderDotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });
});