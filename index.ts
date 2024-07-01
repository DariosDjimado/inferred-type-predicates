interface Apple {
    type: 'apple';
    variety: string;
    sweetness: number;
}

interface Orange {
    type: 'orange';
    variety: string;
    sourness: number;
}

type Fruit = Apple | Orange;

const fruits: Fruit[] = [
    {type: 'orange', variety: 'Clementine', sourness: 2},
    {type: 'orange', variety: 'Blood', sourness: 7},
    {type: 'orange', variety: 'Mandarin', sourness: 4},
    {type: 'apple', variety: 'Fuji', sweetness: 10},
    {type: 'apple', variety: 'Honeycrisp', sweetness: 9},
    {type: 'apple', variety: 'Granny Smith', sweetness: 6},
];

// Before TypeScript 5.5

// fruits.filter(fruit => fruit.type === 'apple').forEach(apple => {
//     console.log(apple.sweetness); // Error: Property 'sweetness' does not exist on type 'Fruit'.
// });
//
// // Alternative 1: using type predicate
// function isApple(fruit: Fruit): fruit is Apple {
//     return fruit.type === 'apple';
// }
//
// fruits.filter(isApple).forEach(apple => {
//     console.log(apple.sweetness) // No error
// });

// TypeScript 5.5

fruits.filter(fruit => fruit.type === 'apple').forEach(apple => {
    console.log(apple.sweetness); // No error
});
