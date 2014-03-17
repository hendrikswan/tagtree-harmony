// function log(msg, level='debug'){
//   console.log(`${level.toUpperCase()}: ${msg}`);
// }

// log('hey there you guys!');
// log('Im really concerned with the state of affairs', 'warn')


function log(msg, level, ...args){
  console.log(`${level.toUpperCase()}: ${msg}`, ...args);
}


log('Im really concerned with the state of affairs in %s, because of %s', 'warn',
  'Hout Bay', 'dogs barking')
