// console.log("App");
// //object literal
// const person={
//     name:"Angel",
//     city:"New York",
//     age:27,
//     student:true,
//     music:["Coldplay","Oasis","Beatles"],
//     address:{
//         street:"University",
//         number:"262-K"
//     }
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person.music[1]);
// console.log(person.address.street);
var salon={
    name:"The Posh Paw Day Spa",
    telephone:"555-555-5555",
    address:{
        street:"Palm",
        number:"345"
    },
    hour:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[{ 
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Great Dane",
            service:"Full Service",
            ownerName:"Shaggy",
            contactPhone:"555-555-5555"
            },
            {
            name:"Scrappy",
            age:50,
            gender:"Male",
            breed:"Dane",
            service:"Nails cut",
            ownerName:"Shaggy",
            contactPhone:"555-555-5555"
            },
            {
            name:"Lana",
            age:9,
            gender:"Female",
            breed:"Hound Mix",
            service:"Wash and nails cut",
            ownerName:"Cameron",
            contactPhone:"555-555-5555"
            },
            {
            name:"Bowie",
            age:15,
            gender:"Male",
            breed:"Chihuahua Mix",
            service:"Full Service",
            ownerName:"Heidi",
            contactPhone:"555-555-5555"
            }
        ]
}
function petInfo(){
    

for(var i=0;i<4;i++){//i<salon.pets.length; to loop through full length of the array even if items are added or deleted
    document.getElementById("petInfo").innerHTML=`
    <p>We currently have ${salon.pets.length} furiends that we care for regularly.</p>
    <p>Some of the furiends we have registered with <span class="logo-theme">${salon.name}</span> are ${salon.pets[0].name}, ${salon.pets[1].name}, ${salon.pets[2].name}, ${salon.pets[3].name}.</p>
    <p>All of these Furiends are different sizes and breeds, ranging from a ${salon.pets[3].breed} to a ${salon.pets[0].breed}, so rest assured, we can care for any domestic pet you choose to entrust with us.</p>
    `;
};
};

function salonInfo(){
    document.getElementById("footer-site").innerHTML=`
    <p>${salon.name}</p>
    <p>${salon.address.street}, ${salon.address.number} telephone number: ${salon.telephone}</p>
    <p>The Spa is open from ${salon.hour.open} to ${salon.hour.close}</p>
    `;
}
petInfo();
salonInfo(); 

