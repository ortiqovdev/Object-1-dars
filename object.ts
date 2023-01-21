//* Object
//* 21.01.2023  || 10:30

// !                            Mavzu
// let shokirjon : {name :string , surname :string, age:number}={
//     name: 'Shokirjon',
//     surname: 'Shokirov',
//     age: 13
// }
// console.log(`O'quvchi ${shokirjon.name} ${shokirjon.surname} ${shokirjon.age} yoshda`);

// !                            Masalalar
// ?                            1-masala
// let bookOne: {name: string,avtor: string, buy: number }={
//     name :' Solaris',
//     avtor: 'Stanislav Lem',
//     buy :   32
// }
// console.log(`Info. Book name : ${bookOne.name}. Book avtor: ${bookOne.avtor}. Buy : $${bookOne.buy}.`);

// let bookTwo: {name: string,avtor: string, buy: number }={
//     name :' War and Peace',
//     avtor: 'Lev Tolstoy',
//     buy :   45
// }
// console.log(`Info. Book name : ${bookTwo.name}. Book avtor: ${bookTwo.avtor}. Buy : $${bookTwo.buy}.`);

// let bookThree: {name: string,avtor: string, buy: number }={
//     name :' Pas day',
//     avtor: 'Abdulla Qodiriy',
//     buy :   40
// }
// console.log(`Info. Book name : ${bookThree.name}. Book avtor: ${bookThree.avtor}. Buy : $${bookThree.buy}.`);

// ?                        2-masala
// let numbers: { a: number, b: number, c: number } = {
//     a: 10,
//     b: 20,
//     c: 30
// }
// let result: { summ: number, substract: number } = {
//     summ: 0,
//     substract: 0
// }
// result.summ = numbers.a + numbers.b +numbers.c;
// result.substract = numbers.a - numbers.b -numbers.c;
// console.log(result.summ);
// console.log(result.substract);

// ?                        3-masala
// let employee1 : {name : string, surname: string, salarey:number}= {
//     name :'Sanjar',
//     surname : 'Hasanboyev',
//     salarey: 5000
// }
// console.log(employee1);

// let employee2 : {name : string, surname: string, salarey:number}= {
//     name :'Diyor',
//     surname : 'Ravshanbekov',
//     salarey: 4000
// }
// console.log(employee2);

// let employee3 : {name : string, surname: string, salarey:number}= {
//     name :'Shokir',
//     surname : 'Shokirov',
//     salarey: 3000
// }
// console.log(employee3);

// ?                       4-masala
// let programming : {langugages : string, isChallenging :boolean, isRewarding: boolean, difficulty: number, jokes : string }={
//     langugages : "Javascript",
//     isChallenging : true,
//     isRewarding: true,
//     difficulty:8,
//     jokes : "Jokes"

// }
// console.log(programming);

// ?                        5-masala
// let fruit: {name: string, buy : number}={
//     name : "apple" ,
//     buy: 5
// }
// let fruit1: {name: string, buy : number}={
//     name : "orange" ,
//     buy: 8
// }
// let fruit2: {name: string, buy : number}={
//     name : "banan" ,
//     buy: 11
// }
// let fruit3: {name: string, buy : number}={
//     name : "apilsin" ,
//     buy: 15
// }
// let fruit4: {name: string, buy : number}={
//     name : "chulchapchap" ,
//     buy: 2
// }
// let narxlar:string [] = []

// if (fruit.buy >= 10){
//     narxlar.push(fruit.name)
// }
// if (fruit1.buy >= 10){
//     narxlar.push(fruit1.name)
// }
// if (fruit2.buy >= 10){
//     narxlar.push(fruit2.name)
// }
// if (fruit3.buy >= 10){
//     narxlar.push(fruit3.name)
// }
// if (fruit4.buy >= 10){
//     narxlar.push(fruit4.name)
// }
// console.log(narxlar);

// ?                        6-masala
let user1: { emil: string, password: string | number } = {
    emil: "akmalbekortiqov7976@gmil.com",
    password: 99999999
}
let user2: { emil: string, password: string | number } = {
    emil: "Akmalbek@gmil.com",
    password: 1111111
}
let user3: { emil: string, password: string | number } = {
    emil: "Sanjarbek777@gmil.com",
    password: 22222222
}
let user4: { emil: string, password: string | number } = {
    emil: "Diyorbek000@gmil.com",
    password: 33333333
}
let user5: { emil: string, password: string | number } = {
    emil: "Shokirjon123@gmil.com",
    password: 444444444
}
// ?                      1-usu
let emils: { emil: string, password: string | number } [] = [user1,user2,user3,user4,user5];
console.log(emils[3].emil);


// ?                       2-usul
// let emils:string []=[]
// emils.push(user3.emil)
// console.log(emils);
