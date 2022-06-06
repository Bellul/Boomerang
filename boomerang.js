/*
Number of Boomerangs
A boomerang is a V-shaped sequence that is either upright or
upside down. Specifically,
a boomerang can be defined as: sub-array of length 3,
with the first and last digits being the same and the middle 
digit being different.

Some boomerang examples:

[3, 7, 3], [1, -1, 1], [5, 6, 5]
Create a function that returns the total number of boomerangs
in an array.

To illustrate:

[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
Be aware that boomerangs can overlap, like so:

[1, 7, 1, 7, 1, 7, 1]
5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7],
[1, 7, 1], [7, 1, 7], and [1, 7, 1]

Examples:
countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0
Notes
[5, 5, 5] (triple identical digits) is NOT considered a 
boomerang because the middle digit is identical to the first
and last.
*/

//? First I made a function that will create an array of 21 random numbers for the boomerangFinder function to look through. This is more for my convineice as I can avoid changing the numbers manually everytime I want to test it

const numbGenerator = () =>{
    let numb = [];
    for (let i = 0; i < 21; i++){
        numb.push(Math.floor(Math.random() * 10));
    }
    return numb
}

console.log(numbGenerator())


const boomerangFinder = array => {
    let output = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] === array[i+2] && array[i] !== array[i+1]){
            //? This if statement checks if the integer at [i] equals the integer 2 indexes over, and also makes sure it is not equal to the integer one index over
            
            // console.log(array[i]);
            // console.log(array[i+1]);
            // console.log(array[i+2]);

            let boomerangs = [array[i], array[i+1], array[i+2]];
            //? This is a temporary array for the boomerangs to be placed in before being pushed to the output array

            output.push(boomerangs);
        };  
    };
    console.log(output);

    return output.length;
};

console.log(boomerangFinder(numbGenerator()));