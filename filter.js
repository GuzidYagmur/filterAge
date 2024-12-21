const ages= [
    {
        id:1,
        name:"Yağmur",
        age:54
    },
    {
        id:2,
        name:"Furkan",
        age:46
    },
    {
        id:3,
        name:"Sevde",
        age:12
    },
    {
        id:4,
        name:"Orhan",
        age:34
    },
    {
        id:5,
        name:"Ahmet",
        age:64
    }
];

function checkAge(agesArray){
   
    const checkAdult = agesArray.filter(person => person.age>18);
    return checkAdult;

}

console.log(checkAge(ages));


