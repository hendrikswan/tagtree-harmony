var hendrik = {
    name: 'hendrik',
    friends: [],
    printFriends: function(){
        this.friends.forEach((f)=>{
            console.log('%s is friends with %s', this.name, f);
        });
    }
}
hendrik.friends.push('Frikkie');
hendrik.friends.push('Frida');
hendrik.printFriends();
