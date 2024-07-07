let cats =["Milo", "Otis", "Garfield"];
    function destructivelyAppendCat(name) {
        cats.push(name);
    }
    function destructivelyPrependCat(name) {
        cats.unshift(name);
    }
    function destructivelyRemoveCat(name) {
        cats.pop();
    }
    function destructivelyRemoveCat(){
        cats.shift();
    }
    function appendCat(name) {
        retun[cats, name];
    }
    function prependCat(name) {
        return [name,...cats];
    }
    function removelastCat(){
        return cats.slice(0, -1);
    }
    function removeFirstCat(){
        return cats.slice(1);
    }


