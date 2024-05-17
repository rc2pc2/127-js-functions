
// > una funzione che non restituisce, non ritorna, non da' qualcosa a chi chiama si dice VOID

// const variabile = 'Ginetto';

// function parla(nome, testo){
//     // < COME SE SCRIVESSI let nome = LA PRIMA COSA CHE HA SCRITTO L'INVOCATORE
//     // < COME SE SCRIVESSI let testo = LA SECONDA COSA CHE HA SCRITTO L'INVOCATORE
//     console.log(nome, testo);
// }

// function moltiplica(moltiplicando, moltiplicatore){
//     let risultato = moltiplicando * moltiplicatore;
//     return risultato; // ! restistuisci a chi invoca la funzione il risultato di QUESTA ESECUZIONE
// }

// let varB = moltiplica(5,5);  // # 25
// let varC = moltiplica(10,30); // # 300

// let numeroRandomico = getRandomInt(1,100);

// function getRandomInt(min, max){
//     const randomNumber = Math.floor( Math.random() * (max - min + 1) + min);
//     return randomNumber;
// }

// Snack5
// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


// const userWordA = prompt('Scrivi la prima parola');
// const userWordB = prompt('Scrivi la seconda parola');

// if ( sonoLungheUguali(userWordA, userWordB) === true){
//     console.log(userWordA, userWordB);
// } else {
//     if (userWordA.length > userWordB.length) {
//         console.log(userWordA);
//     } else {
//         console.log(userWordB);
//     }
// }

// function sonoLungheUguali(parolaA, parolaB){
//     if ( parolaA.length  === parolaB.length ){
//         return true;
//     } else {
//         return false;
//     }

//     // # return parolaA.length  === parolaB.length;
// }


// function getReversedNumber(number){
//     const string = number + '';
//     let revesedString = '';
    
//     for (let index = string.length - 1; index >= 0; index--) {
//         revesedString += string[index];
//     }
    
//     return Number.parseInt(revesedString, 10);
// }

// const userNumber = Number.parseInt(prompt('Type a number'), 10);
// console.log(userNumber);

// console.log(getReversedNumber(userNumber));

// Palidroma
// Chiedere all’utente di inserire una parola
// > Creare una funzione per capire se la parola inserita è palindroma

let userWord = prompt('Type a word').trim().toLowerCase();

while (userWord.length < 1){
    userWord = prompt('Type a word').trim().toLowerCase();
}

function isPalindrome(word){
    if( word.length === 1){
        return true;
    } else {
        let reversedWord = '';
        for (let index = word.length - 1; index >= 0; index--) {
            console.log(word[index], reversedWord);
            reversedWord += word[index];
        }

        if (reversedWord === word){
            return true;
        } else {
            return false 
        }
    }
    // 'abcdefghilmn' // # for per lunghezza stringa == n
    // ['a', 'b', ...] // # for per lunghezza stringa == n
    // ['a', 'b', ...] // # for per lunghezza stringa == n
    // % n + n + n = 3n
    // # return word === ''.split('').reverse().join('');
}
console.log(`Is ${userWord} palindrome?`,  isPalindrome(userWord));

// let oddOrEven = prompt('pari o dispari').trim().toLowerCase();
// while (oddOrEven !== 'pari' && oddOrEven !== 'dispari'){
//     oddOrEven = prompt('pari o dispari').trim().toLowerCase();
// }

// let userNumber = Number.parseInt(prompt('scegli un numero da 1 a 5').trim(), 10);
// while ( Number.isNaN(userNumber) || userNumber < 1 ||  userNumber > 5 ){
//     userNumber = Number.parseInt(prompt('scegli un numero da 1 a 5').trim(), 10);
// }

// console.log(`L'utente ha scelto ${oddOrEven}, e il numero ${userNumber}`);

// const aINumber = getRandomInt(1, 5);
// const sum = userNumber + aINumber;

// console.log(`Il computer ha generato ${aINumber}, e la somma dei due numeri e' ${sum}`);

// let result;

// if( isEven(sum) === true ){
//     result = 'pari';
// } else {
//     result = 'dispari';
// }

// // if( isOdd(sum) === false ){
// //     result = 'pari';
// // } else {
// //     result = 'dispari';
// // }

// if (result === oddOrEven){
//     console.log('L\'utente vince');
// } else {
//     console.log('Il computer vince');
// }

/**
 * A function that generates a random number between a minimum and a maximum number (both included)
 * 
 * @param min The minimum random number allowed  
 * @param max The maximum random number allowed
 * @returns The generated random number
 */
function getRandomInt(min, max){
    const randomNumber = Math.floor( Math.random() * (max - min + 1) + min);
    return randomNumber;
}

/**
 * A function that checks if a number is odd
 * 
 * @param number The number to check 
 * @returns true if the given number is odd, false otherwise
 */
function isOdd(number){
    number = Number.parseInt(number, 10);
    // # return number % 2 === 1;
    if ( number % 2 === 1){
        return true;
    } else {
        return false;
    }
}

/**
 * A function that checks if a number is even
 * 
 * @param number The number to check 
 * @returns true if the given number is even, false otherwise
 */
function isEven(number){
    number = Number.parseInt(number, 10);
    // % return number % 2 === 0;
    if ( number % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function pariODispari(numero){
    if ( numero % 2 === 0){
        return 'pari';
    } else {
        return 'dispari';
    }
}
