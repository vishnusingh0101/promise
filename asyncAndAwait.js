console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise( (resolve, reject) =>{
        setTimeout( () => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

    const getButter = new Promise((resolve, reject) => resolve(`butter`));

    let getColdDrinks  = new Promise((resolve,reject) => resolve(`ColdDrink`));

    let ticket = await promiseWifeBringingTicks;
    
    
    let [popcorn, butter, coke] = await Promise.all([getPopcorn, getButter, getColdDrinks]);
    console.log(`${popcorn}, ${butter}, ${coke}`)

    return ticket; 
}; 

 
preMovie().then( (m) => console.log(`person3: shows ${m}`));

console.log('person4: show ticket');
console.log('person5: show ticket');
