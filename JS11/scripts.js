const tooltips = function(){
    window.addEventListener('load' , function(){
        let toolTip = document.querySelectorAll('#data-tips');
        let tipe = document.querySelector('.tooltipe');
        let atributeTipe;

        toolTip.forEach(function(tip){
            tip.addEventListener('mouseover' , function(event){
                atributeTipe = this.getAttribute('title');
                tipe.innerHTML = atributeTipe;
                tipe.classList.remove('deactive');
                tipe.style.left = (event.x - 30) + 'px';
                tipe.style.top = (event.y - 30) + 'px';
                this.removeAttribute('title');

            });
            tip.addEventListener('mouseout' , function(){
                tipe.classList.add('deactive');
                addTitle = tipe.value
                this.setAttribute('title' , tipe.innerHTML)
            });
        });
    });
};

tooltips();