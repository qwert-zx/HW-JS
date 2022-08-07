let Kettle = function(){

    this.t1 = 90;
    this.t2 = 20;
    this.time = 0;
    
    this.get = function(){
        this.vh = +prompt('Введите мощность в Вт', '1800');
        this.v = +prompt('Введите объем в литрах', '1.5');
        this.v1 = +prompt('Сколько воды залито в мл', '250');
        this.btn = confirm('ВКЛ/ВЫКЛ?');
        this.operation();
    };
    this.operation = function (){       
        if (this.v1 <= (this.v*1000)){
            time = (4200 * this.v1 * Math.pow(10,-3) * (this.t1 - this.t2) / this.vh);
        } else alert ('Чайник переполнен, попробуйте еще раз.')
        this.show()
    };

    this.show = function(){
        if (this.btn === true){
            alert ('Напиток готов за ' + Math.floor(time / 60) + ' ' + 'минут(ы)' + ' ' + Math.floor(time % 60) + ' ' + 'секунд(ы).');
        } else alert('Увы чайник не включен...')
    };
};

let kettle = new Kettle();

console.log(kettle);

let CoffeMashine = function(){
    this.maxCoffe = 100;
    Kettle.apply(this);
    let oldGet = this.get

    this.get = function(){
        this.cup = 250 * (+prompt('сколько чашек кофе приготовить?', '1'));
        oldGet.call(this);
    };

    let oldShow = this.show;

    this.show = function(){
        if (this.cup <= this.v1){oldShow.call(this)}
        else alert('Долейте воды');
    };
};

let coffe = new CoffeMashine();


coffe.get();
console.log(coffe);
