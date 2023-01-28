const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    let strToArr = expr.split('');
    let symbolArr = [];

    while(strToArr.length > 0) {
        symbolArr.push(strToArr.splice(0, 10));
    }

    const changeSymbol = symbolArr.map(element => {
        let arr = [];

        while(element.length > 0) {
            arr.push(element.splice(0, 2).join(''));
        } 

        return arr.map(item => {
            if (item === '10') {
                return '.'
            } else if (item === '11') {
                return '-'
            } else {
                return ''
            }
        }).join('')
        
    });

    const codeToWord = changeSymbol.map(element => {
        if (element === '') {
            return " "
        }

        for (let item in MORSE_TABLE) {
            if (item === element) {
                return MORSE_TABLE[item]
            }
        }

    })


    return codeToWord.join('')
}


module.exports = {
    decode
}