const slider = function(opt) {

    if (!opt.name || !opt.btns.left || !opt.btns.right) return;

    const listElem = document.querySelector('#' + opt.name);

    if (!listElem || listElem.children.length <= 1) return;

    const btnLeft = document.querySelector('#' + opt.btns.left);
    const btnRight = document.querySelector('#' + opt.btns.right);

    if (!btnLeft || !btnRight) return;

    const prevNext = function() {
        let x = listElem.style.transform;

        if (!x) {
            x = 0;
        } else {
            x = x.replace('translateX(', '');
            x = x.replace('%)', '');
            x = Math.abs(x);
            clearTimeout(timer);
        }
        
        const dir = (this == btnLeft) ? 'prev' : 'next';

        x += 100 * (dir == 'prev' ? -1 : 1);

        const stopPoint = (listElem.children.length - 1) * 100;

        if (x <= stopPoint) listElem.style.transform = `translateX(-${x}%)`;
        else if (x > stopPoint) listElem.style.transform = `translateX(0%)`;
        
        if (dir == 'prev' && x < 0) listElem.style.transform = `translateX(-${stopPoint}%)`;

        autoPlay();

    };

    btnLeft.addEventListener('click', prevNext);
    btnRight.addEventListener('click', prevNext);


    let timer;

    const autoPlay = function (){
        timer = setTimeout(prevNext, 2000);
    };
    autoPlay();

    let btns = document.querySelectorAll('.slider__btn_img');

    const btnImg = function(){
        let arrBtns = [];
        console.log(btns);
        btns.forEach(function(elem){
            arrBtns.push(elem);
        });
        arrBtns[0].addEventListener('click' , function(){
            listElem.style.transform = 'translateX(0%)';
            clearTimeout(timer);
            autoPlay();
        });
        arrBtns[1].addEventListener('click' , function(){
            listElem.style.transform = 'translateX(-100%)';
            clearTimeout(timer);
            autoPlay();
        });
        arrBtns[2].addEventListener('click' , function(){
            listElem.style.transform = 'translateX(-200%)';
            clearTimeout(timer);
            autoPlay();
        });
        arrBtns[3].addEventListener('click' , function(){
            listElem.style.transform = 'translateX(-300%)';
            clearTimeout(timer);
            autoPlay();
        });
        arrBtns[4].addEventListener('click' , function(){
            listElem.style.transform = 'translateX(-400%)';
            clearTimeout(timer);
            autoPlay();
        });
        arrBtns[5].addEventListener('click' , function(){
            listElem.style.transform = 'translateX(-500%)';
            clearTimeout(timer);
            autoPlay();
        });
        arrBtns[6].addEventListener('click' , function(){
            listElem.style.transform = 'translateX(-600%)';
            clearTimeout(timer);
            autoPlay();
        });
    };
    btnImg();
};



window.addEventListener('load', function() {
    
    const slider1_options = {
        name: 'slider1',
        btns: {
            left: 'slider1_btn_left',
            right: 'slider1_btn_right'
        }
    };

    slider(slider1_options);
});