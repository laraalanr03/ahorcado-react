let words: string[] = [
    'SIXSEVEN',
    'TEAMO',
    'CHANGUITA',
    'UWU',
    'FORNITE',
    'ARES',
    'RENEEELAMORDEMIVIDA',
    
];


export function getRandomWord() {

    const randomIndex = Math.floor( Math.random() * words.length );
    return words[randomIndex];
    
}