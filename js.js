let tabs = document.querySelector('.tabs');
let tab = document.querySelectorAll('.tab');
let images = document.querySelector('.images');
let image = document.querySelectorAll('.image');

function hide(a) {
    for (let i = a; i < image.length; i++) {
        image[i].classList.remove('show');
        image[i].classList.add('hide');
    }

}

hide(1);


function show(b) {
    for (let i = 0; i < image.length; i++) {
        if (image[i] == image[b]) {
            image[i].classList.remove('hide');
            image[i].classList.add('show');
            return;
        }


    }
}

tabs.addEventListener('click', function (event) {
    for (let i = 0; i < tab.length; i++) {
        if (event.target == tab[i]) {
            hide(0);
            image[i].classList.remove('hide');
            image[i].classList.add('show');
        }
    }
});

function slider() {
    for (let i = 0; i < tab.length; i++) {

        setTimeout(function () {

            hide(0);
            tab[i].classList.add('yellow');
            image[i].classList.remove('hide');
            image[i].classList.add('show');
            for (let b = 0; b < tab.length; b++) {
                if (tab[b] !== tab[i]) {
                    tab[b].classList.remove('yellow');
                }
            }

            

        }, 2000 * i);

    }
}

slider();


// tabs.addEventListener('mouseout', function (event) {
//     if (event.target.classList.contains('tab')) {

//     }
// });