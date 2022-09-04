class User {
    constructor(dataUser){
        this.data = {}
        if (!dataUser) return;
        if (!dataUser.name) return;
        this.data = dataUser;
    };
    edit(editDataUser){
        if(editDataUser.name !== undefined && editDataUser.name == 0) return;
        this.data = {...this.data, ...editDataUser};
    };
    get(id){
        return this.data;
    };

};

/* =================================================== */

class Contacts {
    
    constructor(){
        this.data = [];
        this.lastId = 0
    }
    add(dataUser){
        let user = new User(dataUser);
        let userData = Object.keys(user.get());
        if (userData.length == 0) return
        this.lastId++;
        dataUser.id = this.lastId;
        this.data.push(user);
    }
    edit(id,  editDataUser){
        if (!id) return;
        this.data.forEach(function(item){
            if (item.data.id == id) item.edit(editDataUser)
        })

    }
    remove(id){
        if (!id) return;
        this.data.splice(id - 1  , 1);
    }
    get(id){
        let searchId = ''
        this.data.forEach(function(item){
            if(item.data.id == id) searchId = item.get()
        })
        if (id > 0 && id < this.data.length+1){return searchId}
        return this.data
    };

    
};

const myContacts = new Contacts();


class ContactsApp extends Contacts {


    constructor(){

        super();
        let dataApp = []; 
        const call = null;
        const tell = null;
        let inputName = null;
        let inputEmail = null;
        let inputAddress = null;
        let inputPhone = null;
        this.app(); 
        this.getStorage();
    };

    app(){
        this.inputName = document.createElement('input');
        this.inputName.type = 'text';
        this.inputName.name = 'contacts_name';
        this.inputName.placeholder = 'Name';
        this.inputEmail = document.createElement('input');
        this.inputEmail.type = 'email';
        this.inputEmail.name = 'contacts_emai';
        this.inputEmail.placeholder = 'Email';
        this.inputAddress = document.createElement('input');
        this.inputAddress.type = 'text';
        this.inputAddress.name = 'contacts_address';
        this.inputAddress.placeholder = 'Address'
        this.inputPhone = document.createElement('input');
        this.inputPhone.type = 'number';
        this.inputPhone.name = 'contacts__phone';
        this.inputPhone.placeholder = 'Phone';
        this.inputBtn = document.createElement('button');
        this.inputBtn.classList.add('contacts__btn');
        this.inputBtn.innerHTML = 'Add';
        this.contactsForm = document.querySelector('.contacts__form');
        this.contactForm = document.querySelector('.contacts__list');
        if(!this.contactsForm || !this.contactForm) return;
        this.contactsForm.append(this.inputName, this.inputEmail, this.inputAddress, this.inputPhone, this.inputBtn);
        this.onAdd();

        this.inputBtn.addEventListener('click', (event) => {this.onAdd(event);
        });
    };
    
    onAdd (){

        this.name = this.inputName.value;
        this.email = this.inputEmail.value;
        this.address = this.inputAddress.value;
        this.phone = this.inputPhone.value;
        if (!this.name || !this.email) return
        myContacts.add({name: this.name, email: this.email, address: this.address, phone: this.phone});
        this.upDate();
        this.inputName.value = '';
        this.inputEmail.value = '';
        this.inputAddress.value = '';
        this.inputPhone.value = '';

    };
    getStorage(){
        let dataStorage 
        if (localStorage.length > 0) dataStorage = localStorage.getItem('myContacts');
        dataStorage = JSON.parse(dataStorage);
        myContacts.data = dataStorage.data
        this.upDate()
    };

    onCall(){
        this.tell = "tel:"+"+"+this.tell;
        this.call.setAttribute('href' , this.tell);
    };

    upDate () {
        this.dataApp = myContacts.data;
        this.contactForm.innerHTML = '';
        this.dataApp.forEach(elem => {
            this.tell = elem.data.phone
            this.id = elem.data.id
            let name = elem.data.name;
            let email = elem.data.name;
            let address = elem.data.address;
            let phone = elem.data.phone;
            const contactPageWrapper = document.createElement('li');
            contactPageWrapper.classList.add('.contact__wrapper');
            this.contactForm.append(contactPageWrapper);
            const contactsPage = document.createElement('div');
            contactsPage.classList.add('contacts__page');
            contactsPage.innerHTML = `${elem.data.name}`
            contactPageWrapper.append(contactsPage);
            const inputCallBtn = document.createElement('div');
            inputCallBtn.classList.add('btn__call');
            this.call = document.createElement('a');
            inputCallBtn.append(this.call);
            const inputEmailBtn = document.createElement('div');
            inputEmailBtn.classList.add('btn__email');
            const inputEditBtn = document.createElement('div');
            inputEditBtn.classList.add('btn__edit');
            const inputRemoveBtn = document.createElement('button');
            inputRemoveBtn.classList.add('btn__remove');
            inputRemoveBtn.innerHTML = '+';
            contactPageWrapper.append(inputRemoveBtn, inputCallBtn, inputEmailBtn, inputEditBtn);


            inputRemoveBtn.addEventListener('click' , (event) => {
                this.onRemove(this.id);
                console.log('asdasd')
            })

            inputCallBtn.addEventListener('click' , (event) => {
                this.onCall(this.tell);
            })

            inputEditBtn.addEventListener('click', (event) => {
                this.onEdit(name, email, address, phone);
            })
        })
        localStorage.setItem('myContacts' , JSON.stringify(myContacts));
    };
    onRemove(){
        myContacts.remove(this.id);
        this.upDate();
    }

    onEdit (name, address, email, phone){

        let popUp = document.querySelector('.popup__edit');
        let popUpName = document.querySelector('.popup__edit_name');
        popUpName.setAttribute('contenteditable', 'true')
        let popUpEmail = document.querySelector('.popup__edit_email');
        popUpEmail.setAttribute('contenteditable', 'true')
        let popUpAddress = document.querySelector('.popup__edit_address');
        popUpAddress.setAttribute('contenteditable', 'true')
        let popUpPhone = document.querySelector('.popup__edit_phone');
        popUpPhone.setAttribute('contenteditable', 'true')
        popUpName.innerHTML = name;
        popUpEmail.innerHTML = email;
        popUpAddress.innerHTML = address;
        popUpPhone.innerHTML = phone;

        popUp.classList.remove('hiden');
        popUp.classList.add('active');

        let popClouse = document.querySelector('.popup__close')
        popClouse.addEventListener('click' ,  function(){
            popUp.classList.add('hiden');
        })

        let save = document.querySelector('.popup__save');
        let newDataUser;
        save.addEventListener('click' , (event) => {
            newDataUser = {
                name: popUpName.innerHTML,
                email: popUpEmail.innerHTML,
                address: popUpAddress.innerHTML,
                phone: popUpPhone.innerHTML
            };
            popUp.classList.add('hiden')
            popUp.classList.remove('active');
            myContacts.edit(this.id , newDataUser);
            this.upDate()
        })

        this.upDate();

    };

};

new ContactsApp();










