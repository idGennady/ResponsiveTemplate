(function () {
    'use strict';

    document.addEventListener("DOMContentLoaded", function() {

        // all elements
        var sandwich = document.querySelector('.sandwich');
        var menu     = document.querySelector('nav');
        var body     = document.querySelector('body');
        var close    = document.querySelector('.close');

        // open and close menu for mobile
        sandwich.addEventListener('click', function () {
            if(menu.classList.contains('open')){
                // if menu open
                // menu.className.remove('open');
                body.classList.remove('overflowHidden');

                menu.className = 'close';
            } else {
                // if menu close
                menu.className = 'open';
                body.className = 'overflowHidden';
            }
        });

        close.addEventListener('click', function () {
            sandwich.click();
        });

    });

})();