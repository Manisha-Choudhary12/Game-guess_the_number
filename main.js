start = () => {
    let show = document.getElementById("show");
    let result = document.getElementById("result");;
    let displayScore = document.getElementById("displayScore");
    let marks = document.getElementById("marks");
    let n = Math.random() * 100;
    n = Math.round(n + 1);
    console.log(n);
    let input;
    input =prompt('Guess the number between 1 to 100.');
    input = Number.parseInt(input);
    console.log(input);
    console.log(typeof (input));
    let chances = 0;
    ++chances;
    do {
        input = Number.parseInt(input);
        if (input > n) {
            alert(input + ' is greater than the actual number.');
            input =prompt('Enter again') ;
            input = Number.parseInt(input);
            ++chances;
            continue;
        }
        else if (input < n) {
            alert(input + ' is smaller than the actual number.');
            input =prompt('Enter again') ;
            input = Number.parseInt(input);
            ++chances;
            continue;
        }
    } while (input != n)
    let myScore = 100 - chances;
    show.innerHTML= `Congratulations ! 🥳🥳 The number generated was ${n}. \n Your guess is correct.`;
    marks.innerHTML =  `Score : ${myScore}`;
    displayScore.style.backgroundColor = 'white';
    marks.style.color = 'red';
    result.style.background='red';
}

