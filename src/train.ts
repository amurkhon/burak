// G-TASK

import { count } from "console";

// function  getHighestIndex(array: number[]) {
//     const maxValue = Math.max.apply(null,array);
//     const index = array.findIndex((value, index) => {
//         return value == maxValue;
// });
// return index;
// }
// const result = getHighestIndex([23,32,12,45,45,65]);
// console.log(result);

// function getPositive(list: number[]){
//     let positive = '';
//     for(let i of list) {
//         if( i > 0) {
//             positive += i;
//         }
//     }
//     return positive;
// }
// const positive_numbers = getPositive([1,2,3,-4,-5,6,7]);
// console.log(positive_numbers);

// I-TASK

// function majorityElement(array: number[]) {
//     let max = 0;
//     let number;
//     for( let i=1; i<=9; i++) {
//        let count = array.filter(x => x==i).length;
//        if( count > max){
//         max = count;
//         number = i;
//        }
//     }
//     return number;
// }

// const result = majorityElement([1,2,2,2,3,3,3,3]);
// console.log(result);

// J-TASK

// function findLongestWord(text: String) {
//     let longestWord;
//     const words_list = text.split(" ");
//     const new_list = words_list.map((value: String) => {
//         return value.length;
//     });
//     for( let value of words_list) {
//         if(value.length == Math.max.apply(null, new_list)) {
//             longestWord = value;
//         }
//     }
//     return longestWord;
// }
// console.log(findLongestWord('I am from Uzbekistan'))

// H2-TASK

function getDigits(string: String) {
    const list = string.split('');
    let digits = '';
    for(let item of list) {
        if(!Number.isNaN(Number(item))) {
            digits += item;
        }
    }
    return digits;
}
const result = getDigits('ab123b9d34');
console.log(result);