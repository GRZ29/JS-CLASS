let arrMotocicleta = [];
let arrPersonas = [];
let arrOwner = [];

const SetRefreshData = () => {
    if(window.localStorage.getItem(`moto`)){
        let moto = JSON.parse(window.localStorage.getItem(`moto`));
        for (var i of moto){
            arrMotocicleta.push(i);
        }    
    }else{
        arrMotocicleta = [];
    }

    if(window.localStorage.getItem(`persona`)){
        let persona = JSON.parse(window.localStorage.getItem(`persona`));
        for (var i of persona){
            arrPersonas.push(i);    
        }
        
    }else{
        arrPersonas = [];
    }
    if(window.localStorage.getItem(`cliente`)){
        let owner = JSON.parse(window.localStorage.getItem(`cliente`));    
        for (var i of owner){
            arrOwner.push(i)
        }
    }else{
        arrOwner = [];
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    SetRefreshData();
});

function Motocicleta(model,year,name){
    this.model = model;
    this.year = year;
    this.name = name;
}

function MotocicletaOwner(owner, motocicleta) {
    this.owner = owner;
    this.motocicleta = motocicleta;
}

function Personas(name, id, age, profile) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.profile = profile;
}

const NewOwner = (persona,motocicleta) => {
    arrOwner.push(new MotocicletaOwner(persona,motocicleta));
    ValidateLocalStorage('owner',arrOwner)
}

const ValidateLocalStorage = (name,item) => {
    if(window.localStorage.getItem(`${name}`)){
        window.localStorage.setItem(`${name}`,JSON.stringify(item))
    }else{
        window.localStorage.setItem(`${name}`,JSON.stringify(item))
    }
}

const RenderContent = (parameter) => {
    $("#content-render").load(`./${parameter}.html`); 

    // if(parameter === 'JS-Class-AddOwners'){
    //     RenderOptions();
    // }
}

let estado = {
    value: 1,
    [System.toPrimitive](){
        return this.value;
    },
    letraA (a){
        console.log("soy letra A y tengo valor: ",a)
    },
}