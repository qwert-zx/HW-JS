const gallery = function() {
    let images = document.querySelectorAll('.gallery img');

    images.forEach(function(elem){
    elem.addEventListener('click', function(){
    let links = document.body.querySelectorAll('a')
            links.forEach(function(elem){
            elem.addEventListener('click',function(event){
            event.preventDefault()      
        });
    });
        let expandImg = document.querySelector('#expandedImg');
        let imgText = document.querySelector('#imgtext');
        imgText.innerHTML = this.alt;
        expandImg.src = this.src;
        expandImg.parentElement.style.display = 'block';

        let x = document.body.querySelector('.closebtn');
        x.addEventListener('click', function(){
            this.parentElement.style.display='none'
        })
    })
});
};

gallery('gallery'); // id