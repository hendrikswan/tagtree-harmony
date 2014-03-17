var master = 'Hendrik';

var doggy = {
  name: 'Frikkie',
  master,
  bark: function(){
    console.log('whoohoooooo, wheee whhee whooooooo whooooooooooooooooo');
  },
  ['tick_count_' + new Date().getTime()]:  Math.floor(Math.random() * 10000)
}

doggy.bark();
console.log(doggy);