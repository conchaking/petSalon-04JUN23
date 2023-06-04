//object literal

let petSalon = {
    name:"The Fashion Pet",
    address:{
        country:"Mexico",
        city:"Tijuana",
        zip:"23456"
    },
    phone:"6659987311",
    pet:[]
   
        }
let counter=0;
// create the Pet constructor (name,age,gender,breed,service)
function Pet(name,age,gender,breed,service,contact){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.contact = contact;
    this.id=counter++;
}
//get the inputs from the HTML

let inputName = document.getElementById(`txtName`);
let inputAge = document.getElementById(`txtAge`);
let inputGender = document.getElementById(`txtGender`);
let inputBreed = document.getElementById(`txtBreed`);
let inputService = document.getElementById(`txtService`);
let inputContact = document.getElementById(`txtContact`);


function isValid(aPet){
    //we need to assume that the valid pet is true
    let valid = true;
    if(aPet.name == " ")
    {
        //if you get here it means the pet is not valid
        valid = false;
        inputName.classList.add("Error");
    }
    return valid;

}

function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputContact.value="";
}

function register(){
    //create the obj
    console.log("hello im the register");
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputContact.value);
    if(isValid(newPet))
    {
        petSalon.pet.push(newPet);
        //displayPetCard();
        displayPetTable();
        clearInputs();
    }
    //display the object
    console.log("newPet");
    //petSalon.pet.push(newPet);
}

        //attributes
function deletePet(id){
    console.log("Deleting pet" + id);
    let deleteIndex;
    document.getElementById(id).remove();//remove from HTML
    //what about the array?
    for (let i=0; i<petSalon.pet.length; i++){
        let pet= petSalon.pet[i];
        if(pet.id == id){
            deleteIndex=i;
        }
    }    
    petSalon.pet.splice(deleteIndex,1);// deletes from the array
}

    function init(){
    let scooby = new Pet("Sally","60","They","Pitbull","Sexchange","3179183365");
    let scrappy = new Pet("Mark","40","Male","Persian","grooming","5048675309"); 
    petSalon.pet.push(scrappy,scooby); 
    //displayPetCard();
    displayPetTable();
  
    console.log(scooby,scrappy);
    // creating new objects using the constructor Student
}

window.onload=init;//wait to render the HTML