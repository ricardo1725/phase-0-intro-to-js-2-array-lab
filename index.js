// Write your solution here!
const cats = [ "Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
const destructivelyAppendCat = [cats, name]
console.log(destructivelyAppendCat);
console.log(cats);
cats.push("Ralph");
};

function destructivelyPrependCat(name){
const destructivelyPrependCat = [cats, name]
console.log(destructivelyPrependCat);
console.log(cats);
cats.unshift("Bob");
};

function destructivelyRemoveLastCat(name){
const destructivelyRemoveLastCat = [cats, name]
console.log(destructivelyRemoveLastCat);
console.log(cats);
cats.pop()
};

function destructivelyRemoveFirstCat(name){
const destructivelyRemoveFirstCat = [cats, name]
console.log(destructivelyRemoveFirstCat);
console.log(cats);
cats.shift()
};

function appendCat(name) {
return [...cats, name];
};

function appendCat(name) {
    return [...cats, name];
};

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat(name){
    const copyCats = cats.slice();
    return copyCats.slice(0, copyCats.length - 1);
}

function removeFirstCat(name){
    const copyCats = cats.slice();
    return copyCats.slice(1);
}