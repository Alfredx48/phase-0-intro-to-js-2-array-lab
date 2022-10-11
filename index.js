const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(`Ralph`)
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob")
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function destructivelyRemoveLastCat() {
    return cats.pop() 
}

function appendCat() { 
    const copyCats = [...cats, "Broom"] 
    return copyCats
}

function prependCat() { 
    const copyCats = ["Arnold", ...cats] 
    return copyCats
}

function removeLastCat() {
    return cats.slice(0, -1)

}

function removeFirstCat() {
    return cats.slice(1)

}


