const fiveletterwords = listofwords.filter((element) => {
    return element.length === 5;
});

function givedatwordyo(){
    return fiveletterwords[Math.floor((Math.random() * 12652) + 1)];
}
