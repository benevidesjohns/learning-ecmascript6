class List{
    constructor(){
        this.data = []
    }

    add(name){
        this.data.push(name);
        console.log(this.data);
    }
}

class ToList extends List{
    constructor(){
        super();
        this.user = 'User John';
    }

    getUser(){
        console.log(this.user);
    }

    static init(){
        return 'Tests in console';
    }

    //Error - There wasn't instance to use the method 
    //"getUser()", so the static method won't return anything
    /* static init(){
        return 'Welcome ' + getUser();
    } */

}

//---------------------ToList without instance (static) 
console.log(ToList.init());

//---------------------ToList instance

const toList = new ToList();

//Showing in HTML Document
document.getElementById('button').onclick = function(){
    toList.add('John');
    toList.getUser();
}

//---------------------Using var
function verifyEvenNumber(n){
    let verify = n%2 == 0;
    if(verify){
        console.log('Number is even');
    }
    else{
        console.log('Number isnt even');
    }
}

console.log(verifyEvenNumber(2));
console.log(verifyEvenNumber(1));

//Error - This variable declaration (let verify) is outside 
//the scope of the function "verifyEvenNumber()"
//console.log(verify);

//---------------------Using var
var nick = 'Sanddle';
console.log(nick);

nick = 'John';
console.log(nick);

//---------------------Using var and changing it with property list
var daysList = {
    first_day: 'Thursday'
}
console.log(daysList);

daysList.first_day = 'Friday';
console.log(daysList);

//---------------------Using const
const lastNick = 'Cena';
console.log(lastNick);

//Error - The const declaration makes it impossible 
//to retribution the value of the variable
/* lastNick = 'Smith';
console.log(lastNick); */

//---------------------Using const and changing it with property list
const actorList = {
    first_actor: 'John Travolta'
};
console.log(actorList);

actorList.first_actor = 'Tom Cruise';
console.log(actorList);