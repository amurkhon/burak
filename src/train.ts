// G-TASK

// function  getHighestIndex(array: number[]) {
//     const maxValue = Math.max.apply(null,array);
//     const index = array.findIndex((value, index) => {
//         return value == maxValue;
// });
// return index;
// }
// const result = getHighestIndex([23,32,12,45,45,65]);
// console.log(result);

function getPositive(list: number[]){
    let positive = '';
    for(let i of list) {
        if( i > 0) {
            positive += i;
        }
    }
    return positive;
}
const positive_numbers = getPositive([1,2,3,-4,-5,6,7]);
console.log(positive_numbers);