function getPasswordChecker(password){
    return function (guest){
        return guest === password;
    }
}

//true
c = getPasswordChecker("1945");
console.log(c("1945"));

//false
c = getPasswordChecker("1946");
console.log(c("1945"));

//false
c = getPasswordChecker("room");
console.log(c("class"));

//true
c = getPasswordChecker("room");
console.log(c("room"));
