let html = document.querySelector('html');
html.setAttribute("lang", "en");

let meta = document.createElement('meta');
meta.setAttribute('charset','UTF-8');
document.head.appendChild(meta);

let title = document.createElement('title');
title.innerHTML = 'JS-8';
document.head.appendChild(title);

let style = document.createElement('style');
document.head.appendChild(style);

let h1Header = document.createElement('h1Header');
document.body.appendChild(h1Header);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
h1Header.appendChild(h1);

let p = document.createElement('p');
p.innerHTML = 'But i must exlain tot you how all this mistaken idea of denouncing';
h1Header.appendChild(p);

let action = document.createElement('action');
document.body.appendChild(action);

/* --------------------------------------------------------------------------------------------- */

let freelancer = document.createElement('freelancer');
freelancer.classList.add('wrapper')
action.appendChild(freelancer);

let spanFreelancer = document.createElement('div');
spanFreelancer.classList.add('headerAction');
spanFreelancer.innerHTML = 'freelanser';
freelancer.appendChild(spanFreelancer);

let h2Freelancer = document.createElement('h2');
h2Freelancer.innerHTML = 'Inityally designed to'
freelancer.appendChild(h2Freelancer);

let divFreelancer = document.createElement('div');
divFreelancer.classList.add('discription');
divFreelancer.innerHTML = 'But I must explain to you how all this mistaken idea of denouncng'
freelancer.appendChild(divFreelancer);

let btnFreelancer = document.createElement('button');
btnFreelancer.innerHTML = 'start here';
freelancer.appendChild(btnFreelancer);

/* --------------------------------------------------------------------------------------------- */

let studio = document.createElement('studio');
studio.classList.add('wrapper')
action.appendChild(studio);

let spanStudio = document.createElement('div');
spanStudio.classList.add('headerAction');
studio.appendChild(spanStudio);
spanStudio.innerHTML = 'studio';

let h2Studio = document.createElement('h2');
h2Studio.innerHTML = 'Inityally designed to'
studio.appendChild(h2Studio);

let divStudio = document.createElement('div');
divStudio.classList.add('discription');
divStudio.innerHTML = 'But I must explain to you how all this mistaken idea of denouncng'
studio.appendChild(divStudio);

let btnStudio = document.createElement('button');
btnStudio.innerHTML = 'start here';
studio.appendChild(btnStudio);

/* -------------------------------------------------------------------------------------------- */

style.innerHTML = `
* {
    padding: 0;
    margin: 0;
    font-family: Arial;
    }
body {
    margin-left: auto;
    margin-right: auto;
}
action {
    display: flex;
    justify-content: center;
}

h1Header, freelancer, studio {
    display: flex;
    flex-direction: column;
    align-items: center;
}
freelancer {
    border-radius: 5px 0 0 5px;
}
studio {
    border-radius: 0 5px 5px 0;
}
h1 {
    font-weight: lighter;
    font-size: 40px;
    letter-spacing: 2px;
    text-transform: capitalize;
    margin-top: 60px;
    margin-bottom: 30px;
}
p {
    color: #ccc;
    margin-bottom: 60px;
}
.wrapper {
    padding-top: 50px;
    padding-bottom: 50px;
    border: 1px solid #ccc;
}
.wrapper:hover {
    background-color: #a777c7;
}
.headerAction {
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    color:  #ccc;
}
.wrapper:hover .headerAction {
    color: #FBC52B;
}
h2 {
    font-weight: lighter;
    font-size: 40px;
    text-align: center;
    padding: 35px 0;
    margin: 0 20%;

}
.wrapper:hover h2 {
    color: #fff;
}
.discription {
    font-size: 16px;
    text-align: center;
    font-weight: lighter;
    line-height: 26px;
    color: #ccc;
    padding-bottom: 70px;
    margin: 0 20%;
}
.wrapper:hover .discription {
    color: #fff;
}
button {
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: transparent;
    padding: 20px 30px;
    border: 3px solid #FBC52B;
    border-radius: 35px;
    cursor: pointer;
}
.wrapper:hover button {
    color: #fff;
} `