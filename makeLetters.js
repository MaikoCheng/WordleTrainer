function game(){

    const amountLetters = 30;
    const secretword = givedatwordyo();
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let objectarray = [];
    let counter = 0;
    let strikes = 0;
    let hasguessed = false;
    for (let i = 0; i < amountLetters; i++) {
        const letter = `<div class='lettercontainer' id="Letter${i}" style='grid-row: 1'><input type="text" class='letterinput' id="inp${i}" maxLength=1 autocomplete="off"/></div>`;
        if (i<5){
            document.getElementById('word1').insertAdjacentHTML('beforeend',letter);
        }
        else if (i<10){
            document.getElementById('word2').insertAdjacentHTML('beforeend',letter);
        }
        else if (i<15){
            document.getElementById('word3').insertAdjacentHTML('beforeend',letter);
        }
        else if (i<20){
            document.getElementById('word4').insertAdjacentHTML('beforeend',letter);
        }
        else if (i<25){
            document.getElementById('word5').insertAdjacentHTML('beforeend',letter);
        }
        else{
            document.getElementById('word6').insertAdjacentHTML('beforeend',letter);
        }
        document.getElementById(`inp${i}`).addEventListener('input', function (e) {
            
            let key = e.target.value;
            if (counter < 30){

                
                
                if (alphabet.includes(key)){
                    counter++;
                    document.getElementById(`inp${i}`).setAttribute('disabled', true);
                    if (counter < 30){
                        document.getElementById(`inp${i+1}`).removeAttribute('disabled');
                        document.getElementById(`inp${i+1}`).focus();
                    }

                    objectarray.push({i, key});

                    if (counter % 5 === 0 || counter === 30){
                    
                        let correct = 0;
                        for (let j = strikes*5; j < objectarray.length; j++) {
                            
                            if (secretword.includes(objectarray[j].key) && secretword[j%5] === objectarray[j].key){

                                document.getElementById(`Letter${objectarray[j].i}`).style.backgroundColor = 'rgb(67, 233, 67)';
                                document.getElementById(`Letter${objectarray[j].i}`).style.border = "2px solid rgb(100, 200, 100)";
                                correct++;
                                if (correct === 5){
                                    if (counter < 29){
                                        document.getElementById(`inp${i+1}`).setAttribute('disabled', true);
                                    }else{
                                        document.getElementById(`Letter${objectarray[j].i}`).style.backgroundColor = 'rgb(67, 233, 67)';
                                        document.getElementById(`Letter${objectarray[j].i}`).style.border = "2px solid rgb(100, 200, 100)";
                                    }
                                    hasguessed = true;
                                    document.getElementById("hiddentext").style.visibility = 'visible';
                                    document.getElementById("thesentence").innerHTML = 'You Win!';
                                    document.getElementById("onlybutton").style.visibility = 'visible';
                                }
                                
    
                            }else if (secretword.includes(objectarray[j].key)){
                                document.getElementById(`Letter${objectarray[j].i}`).style.backgroundColor = 'orange';
                                document.getElementById(`Letter${objectarray[j].i}`).style.border = "2px solid rgb(250, 140, 0)";
    
                            }
    
                        }
                        strikes++;
                        if (counter === 30 && !hasguessed){
                            document.getElementById("hiddentext").style.visibility = 'visible';
                            document.getElementById('theword').innerHTML = secretword;
                            document.getElementById("onlybutton").style.visibility = 'visible';
                        }
                    }
                }else if(counter % 5 === 0){
                    document.getElementById(`inp${i}`).value = '';
                    document.getElementById(`inp${i}`).focus();

                    

                }else{
                    document.getElementById(`inp${i}`).value = '';
                    objectarray.pop();
                    document.getElementById(`inp${i}`).setAttribute('disabled', true);
                    document.getElementById(`inp${i-1}`).removeAttribute('disabled');
                    document.getElementById(`inp${i-1}`).value = '';
                    document.getElementById(`inp${i-1}`).focus();
                    counter--;

                }
                

            }
        }
        );
    }

    for (let i = 1; i < amountLetters; i++) {

        document.getElementById(`inp${i}`).setAttribute('disabled', true);
        
    }

}

function removeall(){
    for (let i = 0; i < 30; i++) {
        document.getElementById(`Letter${i}`).remove();
        document.getElementById("hiddentext").style.visibility = 'hidden';
        
        document.getElementById("onlybutton").style.visibility = 'hidden';
    }
    game();
}
game()
