function displayPetCard()//function that allows to render the card
{
    let card="";
    const DIV = document.getElementById("pets")

//travel the pets array

    for (let i=0; i<petSalon.pet.length; i++)
    {
        let color = "";
        let pet = petSalon.pet[i];
        if (pet.service == "grooming")
            {
                color = "green";
            }
        
        // create the template
        card += `
        <div id="${pet.id}" class="pet" style="background-color: ${color};">
        <h6>Name: ${pet.name}</h6>
        <p>Age: ${pet.age}</p>
        <p>Service: ${pet.service}</p>
        </div>
        `;
    }    
        console.log(card);
        //insert the template into the HTML
        DIV.innerHTML=card;
    


}
function displayPetTable(){
    let tr = " ";
    const TABLE = document.getElementById("petTable");
    for (let i=0; i<petSalon.pet.length; i++){
        let pet = petSalon.pet[i];
        tr+=`
        <tr id="${pet.id}"class="table-row">
                    <td>${pet.name}</td>
                    <td>${pet.age}</td>
                    <td>${pet.gender}</td>
                    <td>${pet.breed}</td>
                    <td>${pet.service}</td>
                    <td>${pet.contact}</td>
                
                    <td><button class="btn btn-danger btn-sm" onclick="deletePet(${pet.id});"> Delete </button> </td>
        </tr>
        `;
    }
    TABLE.innerHTML=tr;
}


    
    function displayInformation()
    {
        document.getElementById("info").innerHTML=`
        <p> Welcome to ${petSalon.name} </p>
        <p> Located in ${petSalon.address.city} and ${petSalon.address.country} zip code ${petSalon.address.zip} </p>
    
        <p> name: ${petSalon.pet[0].name}</p>
        <p> name: ${petSalon.pet[1].name}</p>
        `;
    }




