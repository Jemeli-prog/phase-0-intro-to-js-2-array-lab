// Write your solution here!

    const cats = ["Milo", "Otis", "Garfield"];



function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
    console.log(cats);
}
function destructivelyRemoveLastCat(){
    cats.pop();
    console.log(cats);
}
function destructivelyRemoveFirstCat(){
    cats.shift();

}
function appendCat(coolCats){
    return [...cats, "Broom"];
    

}

function prependCat(bestCats){
    return ["Arnold", ...cats];
}


function removeLastCat(Garfield){
 return cats.slice(0, cats.length -1);
}
function removeFirstCat(milo){
    return cats.slice(1);
}


