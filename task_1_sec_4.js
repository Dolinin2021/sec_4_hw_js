function getPasswordChecker(password){
    return function (guest){
        return guest === password;
    }
}

c = getPasswordChecker("1945");
console.log(c("1945"));
