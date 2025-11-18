/*
Create a function which accepts a number as a parameter. The function must return a value based on the below conditions:
1. Return "Five" if the number is divisible by 5
2. Return "Two" if the number is divisible by 2
3. Return "Both" if the number is divisible by both 5 and 2
4. Return "None" if the number is neither divisible by 5 nor divisible by 2
*/

function solution1 (num){

if(num % 5 === 0 && num % 2 === 0)
    return 'BOTH'
else if(num %5 ==0)
    return 'Five' 
else if(num %2 ==0)
    return 'Two'
else
    return 'NONE'

}

console.log(solution1(17))