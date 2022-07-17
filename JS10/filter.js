const filter = function() {
    let btns = document.querySelectorAll('.portfolio__filter li');  
    let allBtns;
    let sitesBtns;
    let logoBtns;
    let designBtns;
    
    btns.forEach(function(elem){
        if (elem.dataset.filter === 'all'){
            allBtns = elem;
        } if (elem.dataset.filter === 'sites'){
            sitesBtns = elem;
        } if (elem.dataset.filter === 'logo'){
            logoBtns = elem
        } if (elem.dataset.filter === 'design'){
            designBtns = elem}
    })
    
    btns.forEach(function(elem){
        elem.addEventListener('click', function(){
            btns.forEach(function(elem){
                elem.classList.remove('active'); 
            });
            elem.classList.add('active');            
        })
    })
    
    let images = document.querySelectorAll('.portfolio__list li');
    let sites = [];
    let logo = [];
    let design = [];
    
    images.forEach(function(elem){
        if (elem.dataset.filter === 'sites'){
            sites.push(elem);
        } if (elem.dataset.filter === 'logo'){
            logo.push(elem);
        } if (elem.dataset.filter === 'design'){
            design.push(elem)
        }
    })
    let hiden = function(){
        sitesBtns.addEventListener('click' , function(){
            images.forEach(function(elem){
                elem.classList.add('hide')
            })
            if (sitesBtns.classList.contains('active') === true){
                sites.forEach(function(elem){
                    elem.classList.remove('hide')
                })
            }
        })
        designBtns.addEventListener('click' , function(){
            images.forEach(function(elem){
                elem.classList.add('hide')
            })
            if (designBtns.classList.contains('active') === true){
                design.forEach(function(elem){
                    elem.classList.remove('hide')
                })
            }
        })
        logoBtns.addEventListener('click' , function(){
            images.forEach(function(elem){
                elem.classList.add('hide')
            })
            if (logoBtns.classList.contains('active') === true){
                logo.forEach(function(elem){
                    elem.classList.remove('hide')
                })
            }
        })
        allBtns.addEventListener('click' , function(){
            images.forEach(function(elem){
                elem.classList.add('hide')
            })
            if (allBtns.classList.contains('active') === true){
                images.forEach(function(elem){
                    elem.classList.remove('hide')
                })
            }
        })
    }
    hiden();
};

filter('portfolio'); // id


