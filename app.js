function getLeaderBoard(){
    return [
        'Hendrik',
        'Frikkie',
        'Frida',
        'PersonX',
        'PersonY'
    ]
}

var [leader,runnerUp] = getLeaderBoard();

console.log(`The current leader is ${leader}, and the runner up is ${runnerUp}`);

