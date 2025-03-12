// G-TASK

function  getHighestIndex(array: number[]) {
    const maxValue = Math.max.apply(null,array);
    const index = array.findIndex((value, index) => {
        return value == maxValue;
});
return index;
}
const result = getHighestIndex([23,32,12,45,45,65]);
console.log(result);