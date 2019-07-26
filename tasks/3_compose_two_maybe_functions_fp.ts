import {Option, fromNullable} from 'fp-ts/lib/Option'

const addOne = (n: number): Option<number> => Math.random() > 0.5
    ? fromNullable(n + 1)
    : fromNullable(null);
const addTwo = (n: number): Option<number> => Math.random() > 0.5
    ? fromNullable(n + 2)
    : fromNullable(null);

// TODO: Make an addThree function by composing the above functions
// Don't use assignment. Don't use if's or check if things are maybe's.

const addThree = (n: number): number => {
    return 0;
};

console.log(addThree(39) + " should = 97");
