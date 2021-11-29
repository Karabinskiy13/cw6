//
//
// // - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
// const normname=(name)=>{
//     name.replaceAll('..',' ')
//     name.replaceAll('---', ' ')
//     name.replaceAll('__',' ')
// }


//
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// const randomizer=(lenght,nums)=>{
//     let arr=[]
//     for (let i = 0; i < lenght; i++) {
//         arr.push(Math.round(Math.random()*100))
//     }
// return arr
//     }
//     let result=randomizer(10,100)
// console.log(result)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let arr1=randomizer(10,20)
// arr1.sort((a,b)=>a + b)
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let arr2=randomizer(4,10)
// arr2.filter(value => value%2===0)
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr3=randomizer(10,20)
// arr3.map(value =>value.toString())

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// const sortnums = (numbers,direction) => {
//     let sorted=[]
//   if (direction ==='ascending'){
//       sorted=numbers.sort((a,b)=>a-b);
//   }else if (direction ==='descending'){
//       sorted=numbers.sort((a,b)=>a+b)
//   }
//   return sorted
// }
// console.log(sortnums([1,4,2],'ascending'))

//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// coursesAndDurationArray.sort((a,b)=>a.monthDuration-b.monthDuration)
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// coursesAndDurationArray.filter(value => value.monthDuration>5)