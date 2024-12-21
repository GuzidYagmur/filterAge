const ages= [12,15,45,86,53,21,46,75,92];

function checkAge(agesArray){
   
    const checkAdult = agesArray.filter(age => age>18);
    return checkAdult;

}

console.log(checkAge(ages));


