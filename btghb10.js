//bai1
arrayData = [
person1 ={
    id: 1,
    name: 'Nguyen Van A',
    age: 15,
},

person2 ={
    id: 2,
    name: 'Nguyen Van B',
    age: 16,
},

person3 ={
    id: 3,
    name: 'Nguyen Van C',
    age: 17,
},

person4 ={
    id: 4,
    name: 'Nguyen Van D',
    age: 18,
}
]
console.log("STT:",person1.id,"- Họ tên:",person1.name, "-",person1.age,"tuoi")
console.log("STT:",person2.id,"- Họ tên:",person2.name, "-",person2.age,"tuoi")
console.log("STT:",person3.id,"- Họ tên:",person3.name, "-",person3.age,"tuoi")
console.log("STT:",person4.id,"- Họ tên:",person4.name, "-",person4.age,"tuoi")
//bai2
console.log(person1.name.toUpperCase());
console.log(person2.name.toUpperCase());
console.log(person3.name.toUpperCase());
console.log(person4.name.toUpperCase());
//bai3
var cars = ['Honda', 'Mazda', 'Mercedes'];
var result = cars.join(" - ");
console.log(result);
//bai4
let animals = ['Monkey', 'Tiger', 'Elephant']
console.log(animals)
let results= animals[animals.length-1]
console.log(`A last Element in array is: ${results}`)
//bai5
console.log(animals);
console.log(`A first element in array is: ${animals[0]}`)
//bai6
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
sports.sort((a,b)=>a.like-b.like);
console.log(sports);
let mostFavoriteSport = sports[sports.length-1];
console.log("The most favorite sport is:")
console.log(mostFavoriteSport);
//bai7
var sportss = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
const sum = sportss.reduce((accumulator,object)=>{return accumulator +object.gold;},0)
console.log(`Total gold medal is ${sum}`);
// bai8
var listStudent = [
    { id: 1, name: "Nguyen Van A", age: 15 },
    { id: 2, name: "Nguyen Van B", age: 13 },
    { id: 3, name: "Nguyen Van C", age: 18 },
    { id: 4, name: "Nguyen Van D", age: 14 },

];
listStudent.sort((a,b)=> a.age-b.age);
console.log(listStudent)