const marvel_hero=["ironman","spiderman","thor","antman"]
const dc_hero=["superman","fantacy","rock"]
marvel_hero.push(dc_hero)
console.log(marvel_hero);
//it collect all data in one array through the help of concat..alternativ spreate
const allArray= marvel_hero.concat(dc_hero)
console.log(allArray);
//multipal array in one array than how to print in one line of code..
let another_array=[1,2,3,4,4,[4,3,4,5,5,[3,4,5,6,]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);
//any string are converted by from keyword
console.log(Array.from("Vishal"));


