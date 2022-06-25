
let Kettle = function(){

    this.get = function(){
        this.u = 4200;
        this.p1 = Math.pow(10,-3);
        this.t1 = 90;
        this.t2 = 20;
        this.vh = +prompt('Введите мощность чайника в Вт', '1800');
        this.v = +prompt('Введите объем чайника в литрах', '1.5');
        this.v1 = +prompt('Сколько хотите закипятит воды в мл', '250');
        this.btn = confirm('ВКЛ/ВЫКЛ Чайник?');
        this.operation();
        this.t = 0;
    };
    this.operation = function (){       
        if (this.v1 <= (this.v*1000)){
            t = (this.u * this.v1 * this.p1 * (this.t1 - this.t2) / this.vh);
        } else alert ('Чайник переполнен, попробуйте еще раз.')
        this.show()
    };

    this.show = function(){
        if (this.btn === true){
            /* alert ('Время нагрева воды до 90 градусов займет' + ' ' +  Math.floor(t) + " " + 'cекунд'); */
            alert ('Вода закипит за ' + Math.floor(t / 60) + ' ' + 'минут(ы)' + ' ' + Math.floor( t % 60) + ' ' + 'секунд.');
        } else alert('Увы чайник не включен...')
    };
};

let kettle = new Kettle();
kettle.get();

console.log(kettle, typeof kettle);
