const character1={
    title:"ninja",
    emoji:"🥷",
    powers:['stealth','agility','martial arts']
}
for(let property in character1){
    console.log(`${property}: ${character1[property]}`);
}
const cartons={
name:['shinchan','doraemon','spongebob'],
year:[1992,1969,1999],
speciality:['family','friendship','comedy']
}
for(let property in cartons){
    console.log(`${property}: ${cartons[property]}`);}