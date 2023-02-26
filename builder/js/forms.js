 class Form {

    constructor(controls, action){
        this.controls = controls;
        this.action = action; 
    }

    getContent() {
        return `<form method="POST" action="${this.action}">
            ${this.controls.reduce((acumulator,control)=>{
                return acumulator + `<div>
                    ${this.getLabel(control)}
                    ${this.getInput(control)}
                </div>`
            },"")}
            <button type="submit">Enviar</button>
        </form>`
    }

    getLabel(control){
        return `<label>${control.text}</label>`;
    }

    getInput(control){
        return `<input type="${control.type}" id="${control.name}" name="${control.name}"/>`;
    }
 }

 class FormBuilder {
    constructor(){
        this.reset();
    }

    reset(){
        this.action = "";
        this.controls = [];
    }

    setAction(action){
        this.action = action;
        return this;
    }

    setText(name, text){
        this.controls.push({
            name,
            text,
            type: 'text'
        });
        return this;
    }

    setCheckbox(name, text){
        this.controls.push({
            name,
            text,
            type: 'checkbox'
        });
        return this;
    }

    setColor(name, text){
        this.controls.push({
            name,
            text,
            type: 'color'
        });
        return this;
    }

    setEmail(name, text){
        this.controls.push({
            name,
            text,
            type: 'email'
        });
        return this;
    }

    build(){
        const form = new Form(this.controls,this.action);
        this.reset();
        return form;
    }
 }

 class FormDirector {
    constructor(formBuilder){
        this.setBuilder(formBuilder);
    }

    setBuilder(formBuilder){
        this.formBuilder = formBuilder;
    }

    createFormPeople() {
        this.formBuilder.reset();
        this.formBuilder.setText("firstName","Nombre")
                        .setText("lastName","Apellido");
    }

    createContactForm() {
        this.formBuilder.reset();
        this.formBuilder.setText("name","Nombre del interesado")
                        .setText("email","Correo")
                        .setText("message","Mensaje");
    }
 }

 const formBuilder = new FormBuilder();
 const formPeople = formBuilder.setAction('add.php')
                                .setText('firstName', 'Nombre')
                                .setText('lastName', 'Apellido')
                                .setCheckbox('checkbox1','Eres bebedor?')
                                .setColor('color1','Color favorito')
                                .build();
console.log(formPeople);

form1.innerHTML = formPeople.getContent();

const formMail = formBuilder.setAction('send.php')
                            .setText('name','Nombre')
                            .setEmail('email','Correo')
                            .build();
                            
form2.innerHTML = formMail.getContent();

const director = new FormDirector(formBuilder);
director.createFormPeople();
form3.innerHTML = formBuilder.build().getContent();

director.createFormPeople();
form4.innerHTML = formBuilder.build().getContent();

director.createContactForm();
form5.innerHTML = formBuilder.build().getContent();