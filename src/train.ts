// G-TASK

import { count } from "console";
import { Interface } from "readline";
import { T } from "./libs/types/common";

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

// function getDigits(string: String) {
//     const list = string.split('');
//     let digits = '';
//     for(let item of list) {
//         if(!Number.isNaN(Number(item))) {
//             digits += item;
//         }
//     }
//     return digits;
// }
// const result = getDigits('ab123b9d34');
// console.log(result);

// K-TASK

// function countVowels(word: string) {
//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const list = word.split('');
//     for (let letter of list) {
//         if(vowels.includes(letter.toLowerCase()))
//             count += 1;
//     }
//     return count;
// }

// const result = countVowels("string");
// console.log("count of vowels: ", result);

// L-TASK

// function reverseSentance(sentance: String) {
//     const words = sentance.split(' ');
//     const reversed = words.map(value => {
//         return value.split('').reverse().join('')
//     })
//     return reversed.join(' ');
// }
// const reversed = reverseSentance('We like coding');
// console.log(reversed);

// M-TASK

// function getSquareNumbers(array: number[]) {
//     let objects: {}[] = [];
//     array.map((value: number) => {
//         let squareNumbers: T = {};
//         squareNumbers.number = value;
//         squareNumbers.square = value**2;
//         objects.push(squareNumbers);
//     });
//     return objects;
// }
// const objects = getSquareNumbers([1,2,3,4]);
// console.log(objects);

// O-TASK

// function calculateSumOfNumbers(array: any[]){
//    let sum = 0;
//    array.forEach( item => {
//        if(typeof item === 'number'){
//            sum += item;
//        }
//    });
//    return sum;
// }

// const result = calculateSumOfNumbers([10, '10', {son: 10}, true, 35]);
// console.log("result: ", result);

// P-TASK

// function objectToArray(object: {}) {
//    let array = [];
//    for (let [key, value] of Object.entries(object)){
//        array.push([key, value]);
//    };
//
//    return array;
// };

// const result = objectToArray({a:10, b:20, c:'Khan', d:true});
// console.log("result: ", result);

// Q-TASK

// function hasProperty(obj: {}, str: string) {
//    let value = 0;
//    for (let key in obj) {
//        if(key === str){
//            value += 1;
//        }
//    }
//    if(value > 0) {
//        return true;
//    } else{
//        return false;
//    }
// }

// const result = hasProperty({name:"BMW", model: "M3"}, "model");
// console.log("result: ", result);

// R-TASK

function calculate (value: string) {
    let sum = 0;
    const string = value.split('');
    for(let i=1; i < 10; i++ ) {
        if(string.includes(i.toString())){
            sum += i;
        }
    }
    return sum;
}
const result = calculate('9+6');
console.log("result: ", result);