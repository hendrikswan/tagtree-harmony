var hendrik = {
    name: 'hendrik',
    friends: [],
    printFriends(){
        this.friends.forEach((f)=>{
            console.log(`${this.name} is friends with 

                            ${f}

                `);
        });
    }
}

hendrik.friends.push('Frikkie');
hendrik.friends.push('Frida');

hendrik.printFriends();
