function guessingGame() {
    let correctAnswer = Math.floor(Math.random() * 10) + 1;
    let guessAnswer = prompt("Guess the number between 1 and 10");
    while(guessAnswer !== null && Number(guessAnswer) !== correctAnswer){
        guessAnswer = prompt("Wrong Guess! Choose a number again(between 1 and 10)");
    }
    if(guessAnswer === null) {
        alert("Guessing game canceled.")
    } else {
        alert(`Congratulations! You guessed the correct answer!\nThe correct number is ${correctAnswer}`);
    }
}   

function pwValidator() {
    let firstPassword = prompt("Choose a password");
    let confirmPassword;

    if(firstPassword === null || firstPassword === ""){
        alert("Password Validator canceled. Please enter input");
        return;
    }

    do{
        confirmPassword = prompt("Confirm Password");
        if(confirmPassword !== firstPassword) {
            alert("Password does not match. Try again!");
        }
    }while (confirmPassword !== firstPassword) {}
    alert("Congratulations! Password confirmed!");
}

function multiplicationTable() {
    let numberToMultiply = prompt("Choose a number for multiplication table");
    
    if (numberToMultiply === null || numberToMultiply === "") {
        alert("Multiplication Table canceled. Please enter input");
        return;
    }

    let input = Number(numberToMultiply);

    if (isNaN(input)){
        alert("Invalid input. Please enter a valid number.");
        return;
    }

    let result = "";

    for (i= 1 ; i < 11 ; i++) {
        result +=`${input} x ${i} = ${input*i}\n`;
    }
    alert(result);
}

function gradeEvaluator() {
    let score = prompt("Enter the score");

    if(score === null || score === ""){
        alert("Grade evaluator canceled. Please enter input");
        return;
    }

    score = Number(score);

    if(score < 0 || score > 100 || isNaN(score)){
        score = Number(prompt("Invalid score! Please enter a score between 0 and 100."));
    }


    if(score >= 90){
        alert("Grade A");
    }else if(score >= 80){
        alert("Grade B");
    }else if(score >= 70){
        alert("Grade C");
    }else if(score >= 60){
        alert("Grade D");
    }else{
        alert("Grade F");
    }
}

function dayFinder() {
    let number = prompt("Choose a number between 1 and 7");

    if(number === null || number === "") {
        alert("Day Finder canceled. Please enter input");
        return;
    }

    while(number !== null && (Number(number) < 1 || Number(number) > 7)){
        number = prompt("Invalid Number. Choose between 1 and 7");
    }

    let day = "";
        switch(Number(number)){
            case 1:
                day = alert("Sunday");
                break;
            case 2:
                day = alert("Monday");
                break;
            case 3:
                day = alert("Tuesday");
                break;
            case 4:
                day = alert("Wednesday");
                break;
            case 5:
                day = alert("Thursday");
                break;
            case 6:
                day = alert("Friday");
                break;
            case 7:
                day = alert("Saturday");
                break;
        } 
}