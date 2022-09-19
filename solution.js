const argvs = process.argv.slice(2);
const [operation, ...numbers] = argvs;

// define NaN
const isNumber = (num) => !isNaN(num);

// function for sum and avg and med
const sum = (nums) => nums.reduce((acc, num) => acc + num, 0);

const avg = (nums) => sum(nums) / nums.length;

const med = (nums) => {
    const sorted = nums.sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2) {
        return sorted[middle];
    }
    return (sorted[middle - 1] + sorted[middle]) / 2.0;
};


const operations = {
    sum,
    avg,
    med,
};

switch (operation) {
    case 'sum':
    case 'avg':
    case 'med':

        // check if all numbers, boolean
        if (numbers.every(isNumber)) { 
            console.log(operations[operation](numbers.map(Number)));
        }
        else {
            console.log('Sorry, the argument is not a number, please try again');
        }
        break;
    default:
        console.log('I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)');
}






